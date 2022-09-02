package com.wct.animall.security.jwt;

import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.PublicKey;
import java.util.Base64;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.wct.animall.exception.InternauteNotFoundException;
import com.wct.animall.exception.ResourceNotFoundException;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;

@Service
public class JwtProvider {
	private KeyStore keyStore;
	private String secretKey = "09-08-2022-api";

	@Value("${springboot.app.jwtExpirationMs}")
	private Long expiration;

	@Autowired
	private UserDetailsService userDetailsService;

	@PostConstruct
	protected void init() {
		secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
	}

	public JwtProvider(UserDetailsService userDetailsService) {
		this.userDetailsService = userDetailsService;
	}

//	public String createToken(String userName, Authority role) {
//		var claims = Jwts.claims().setSubject(userName);
//		claims.put("auth", List.of(role.getAuthority()).stream().map(SimpleGrantedAuthority::new)
//				.filter(Objects::nonNull).collect(Collectors.toList()));
//		var validity = new Date(System.currentTimeMillis() + expiration);
//		return Jwts.builder().setClaims(claims).setIssuedAt(new Date()).setExpiration(validity)
//				.signWith(SignatureAlgorithm.HS256, secretKey).compact();
//	}

	public Authentication validateUserAndGetAuthentication(String token) {
		var userDetails = userDetailsService.loadUserByUsername(getUsername(token));
		return new UsernamePasswordAuthenticationToken(userDetails, "",
				((AbstractAuthenticationToken) userDetails).getAuthorities());
	}

	public String getUsername(String token) {
		return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
	}

	public String parseToken(HttpServletRequest req) {
		String bearerToken = req.getHeader("Authorization");
		if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
			return bearerToken.substring(7);
		}
		return null;
	}

	public boolean validateToken(String token) throws ResourceNotFoundException {
		try {
			Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
			return true;
		} catch (JwtException | IllegalArgumentException e) {
			throw new ResourceNotFoundException("Expired or invalid JWT token");
		}
	}

	public String getUsernameFromJWT(String token) {
		Claims claims = Jwts.parser().setSigningKey(getPublickey()).parseClaimsJws(token).getBody();

		return claims.getSubject();
	}

	private PublicKey getPublickey() {
		try {
			return keyStore.getCertificate("covoiturage").getPublicKey();
		} catch (KeyStoreException e) {
			throw new InternauteNotFoundException("Exception occured while retrieving public key from keystore");
		}
	}

}
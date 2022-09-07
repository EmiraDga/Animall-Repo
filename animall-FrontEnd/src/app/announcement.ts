import { Animal } from "./animal";
import { UserDto } from "./user";

export class Announcement {

	public	id!: number;

	public location?: String;

	public dateCreated?: String;

	public description?: String;

	public animal?: Animal;

	public user?: UserDto;
}

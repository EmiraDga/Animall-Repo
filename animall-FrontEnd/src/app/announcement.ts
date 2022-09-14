import { Animal } from "./animal";
import { UserDto } from "./user";

export class Announcement {

	public	id!: number;

	public location?: String;

	public dateCreated?: String;

	public description?: String;
	
	 public user!: UserDto;
    public animalName?: String;
	public animalAge?: number;
	 animalColor!:String;
	 animalGender!:String;
	 animalBreed!:String;
	 animalImage!:String;
	 animalVaccinated!:boolean;
	 animalTrained!:boolean;
     animalCategoryName!:String;
	 animalId!:number;

	

}

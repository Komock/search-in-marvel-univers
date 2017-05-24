type SN = string | number;

type HashMap = { [key: string]: string | number | boolean | any };

type Env = {
	production: boolean;
	domain: string;
};

type Hero = {
	comics: HashMap;
	description: string;
	events: HashMap;
	id: number;
	modified: string;
	name: string;
	resourceURI: string;
	series: HashMap;
	stories: HashMap;
	thumbnail:{ extension: string, path: string };
	urls: HashMap[];
}
export interface Flavor {
	name: string;
	color: 'brown' | 'red' | 'blue' | 'orange' | 'white' | 'black';
	rotation: string;
}

export interface Nutrient {
	label: string;
	amount: string;
}

export interface Card {
	src: string;
	rotation: string;
	name: string;
	img: string;
	translation?: string;
}

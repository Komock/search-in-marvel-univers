import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdIconModule, MdCardModule, MdToolbarModule, 
	MdButtonModule, MdProgressSpinnerModule, MdInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	imports: [
		CommonModule,
		NoopAnimationsModule,
		MdButtonModule, 
		MdCardModule,
		MdIconModule,
		MdProgressSpinnerModule,
		MdInputModule
	],
	exports: [
		NoopAnimationsModule,
		MdButtonModule, 
		MdCardModule,
		MdIconModule,
		MdProgressSpinnerModule,
		MdInputModule
	],
	declarations: []
})
export class MaterialModule { }

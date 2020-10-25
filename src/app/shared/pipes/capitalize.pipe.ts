import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
{
	name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform
{
	transform(value: string): string
	{
		const text = value.split('');

		const capitalized = [text[0].toUpperCase(), ...text.slice(1)].join('');

		return capitalized;
	}

}

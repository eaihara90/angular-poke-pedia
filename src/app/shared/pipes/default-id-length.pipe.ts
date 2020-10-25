import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
{
    name: 'defaultIdLength'
})
export class DefaultIdLengthPipe implements PipeTransform
{

    transform(value: any, ...args: unknown[]): string
    {
        const idNumber = parseInt(value);
        
        
        if (idNumber < 10)
        {
            const defaultIdNumber = '00' + idNumber.toString();
            return defaultIdNumber;

        }
        else if (idNumber >= 10 && idNumber < 100)
        {
            const defaultIdNumber = '0' + idNumber.toString();
            return defaultIdNumber;
        }
        else
        {
            return value;
        }
    }

}

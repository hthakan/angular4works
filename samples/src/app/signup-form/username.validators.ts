import { AbstractControl } from "@angular/forms";
import { ValidationErrors } from "@angular/forms/src/directives/validators";
import { transition } from "@angular/core";




export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace: true };

        return null;

    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (control.value === "hakan")
                    resolve({ shouldBeUnique: true });
    
                resolve(null);
            }, 2000);

        });

        

    }
}
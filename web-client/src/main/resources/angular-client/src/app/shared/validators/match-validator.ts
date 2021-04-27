import { AbstractControl, ValidationErrors } from "@angular/forms";

export class MatchValidator {

    static matchControlValue(elementToCompareWith: AbstractControl) : (elementToCompare: AbstractControl) => ValidationErrors | null {
        return (elementToCompare: AbstractControl): ValidationErrors | null => {
            if(elementToCompare == null || elementToCompare == undefined) {
                return {'match': false};
            }

            if(elementToCompareWith == null || elementToCompareWith == undefined) {
                return {'match': false};
            }

            if(elementToCompare.value == undefined || elementToCompare.value == null || elementToCompare.value == '') {
                return {'match': false};
            }

            if(elementToCompareWith.value == undefined || elementToCompareWith.value == null || elementToCompareWith.value == '') {
                return {'match': false};
            }

            const value: string = elementToCompare.value as string;
            const compare: string = elementToCompareWith.value as string;

            if(value.trim().toLowerCase() !== compare.trim().toLowerCase()) {
                return {'match': false};
            }


            return null;
        }
    }
}

// کدهای مربوط به DOM

import * as constants from './constants.js';
import * as elements from './elements.js';


export const updatePersonalCode = (personalCode) => {
    const personalCodeParagraph = document.getElementById('personal_code_paragraph');
    personalCodeParagraph.innerHTML = personalCode;
}
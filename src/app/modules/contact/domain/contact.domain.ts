export interface ContactForm {
    name: string;
    alias: string;
    email: string;
    birthdate: string;
    password: string;
    confirmPassword: string;
    address: string;
}

export const CONTACT_FORM_RULES = {
    REGEX_EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    REGEX_PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    MIN_AGE: 13,
}

export function isValidName(name: string | null): boolean {
    if(name === null) return false;

    return name.trim().length > 0;
}
    
export function isValidAlias(alias: string | null): boolean {
    if(alias === null) return false;

    return alias.trim().length > 0;
}

export function isValidEmail(email: string | null): boolean {
    if(email === null) return false;

    return CONTACT_FORM_RULES.REGEX_EMAIL.test(email);
}

export function isValidBirthdate(birthdate: string | null): boolean {
    if(birthdate === null) return false;

    const birthDateObj = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }
    return age >= CONTACT_FORM_RULES.MIN_AGE;
}

export function isValidPassword(password: string | null): boolean {
    if(password === null) return false;

    return CONTACT_FORM_RULES.REGEX_PASSWORD.test(password);
}

export function doPasswordsMatch(password: string | null, confirmPassword: string | null): boolean {
    if(password === null || confirmPassword === null) return false;

    return password === confirmPassword;
}


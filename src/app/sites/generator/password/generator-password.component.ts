import { Component } from '@angular/core';
import { CustomTitle } from '../../../components/custom-title/custom-title';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDescription } from '../../../components/custom-description/custom-description';

@Component({
  selector: 'app-password',
  imports: [CustomTitle, CustomDescription, ReactiveFormsModule],
  templateUrl: './generator-password.component.html',
  styleUrl: './generator-password.component.css',
})
export class GeneratorPassword {
  passwordGenerator!: any;
  generatedPassword: string = '';
  generated: boolean = false;

  constructor(private fb: FormBuilder) {
    this.passwordGenerator = this.fb.group({
      length: [16],
      includeLetters: [true],
      includeNumbers: [true],
      includeSymbols: [true],
    });
  }

  generatePassword() {
    this.generatedPassword = '';
    const length = this.passwordGenerator.value.length;
    let includeLetters = this.passwordGenerator.value.includeLetters;
    let includeNumbers = this.passwordGenerator.value.includeNumbers;
    let includeSymbols = this.passwordGenerator.value.includeSymbols;

    if (!includeLetters && !includeNumbers && !includeSymbols) {
      this.passwordGenerator.value.includeLetters = true;
      includeLetters = true;
      console.log(this.passwordGenerator.value);
    }

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allChars = '';
    if (includeLetters) allChars += uppercaseChars + lowercaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;

    for (let i = 0; i < length; i++) {
      this.generatedPassword += allChars[Math.floor(Math.random() * allChars.length)];
    }

    this.generated = true;
  }

  copyPassword() {
    navigator.clipboard.writeText(this.generatedPassword);
  }

  public getStrengthDescription = (len: number) => {
    if (len < 10) return { text: 'Very Weak', color: 'text-red-500' };
    if (len < 15) return { text: 'Weak', color: 'text-orange-500' };
    if (len < 20) return { text: 'Strong', color: 'text-green-500' };
    return { text: 'Very Strong', color: 'text-emerald-500' };
  };
}

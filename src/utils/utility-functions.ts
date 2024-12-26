export function convertToPersianNumber(englishNumber: string | number): string {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const englishNumber_str = englishNumber.toString();
  
    return englishNumber_str.replace(/\d/g, (match) => {
        return persianDigits[parseInt(match)];
    });
}
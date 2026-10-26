import { getTimezone } from 'countries-and-timezones';
import { isSupportedCountry, type CountryCode } from 'libphonenumber-js';

export function suggestCountry(timeZone: string, languages: readonly string[]): { country: CountryCode | ''; source: string } {
  const zones: readonly string[] = getTimezone(timeZone)?.countries ?? [];
  const countries = zones.filter((country): country is CountryCode => isSupportedCountry(country));
  if (countries.length === 1) return { country: countries[0], source: 'Suggested from your device time zone' };
  for (const language of languages) {
    try {
      const region = new Intl.Locale(language).region;
      if (region && isSupportedCountry(region) && (!countries.length || countries.includes(region))) {
        return { country: region, source: 'Suggested from your browser language' };
      }
    } catch { /* Ignore malformed locale tags. */ }
  }
  return { country: '', source: '' };
}

import { Mail, Phone, MapPin, Send, Globe, Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState, useEffect } from "react";
import { parsePhoneNumber, getCountries, getCountryCallingCode } from "libphonenumber-js";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils";

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12">
    {subtitle && (
      <span className="text-sm font-mono tracking-wider uppercase text-amber-600 mb-3 block">
        {subtitle}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{children}</h2>
    <div className="h-1 w-20 bg-amber-600 mt-6"></div>
  </div>
);

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().optional(),
  phone: z.string().min(5, {
    message: "Please enter a valid phone number.",
  }),
  countryCode: z.string().min(1, {
    message: "Please select a country.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  projectType: z.string().min(1, {
    message: "Please select a project type.",
  }),
  budgetRange: z.string().min(1, {
    message: "Please select a budget range.",
  }),
});

// Get all available countries with their codes
const getAllCountries = () => {
  const countries = getCountries();
  return countries
    .map((country) => ({
      code: country,
      name: new Intl.DisplayNames(["en"], { type: "region" }).of(country) || country,
      callingCode: `+${getCountryCallingCode(country)}`,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
};

// Detect user's country from browser locale or timezone
const detectUserCountry = (): string => {
  try {
    // Try to get from browser language/locale
    const locale = navigator.language || (navigator as any).userLanguage;
    if (locale && locale.includes("-")) {
      const countryCode = locale.split("-")[1].toUpperCase();
      const allCountries = getCountries();
      if (allCountries.includes(countryCode)) {
        return countryCode;
      }
    }
  } catch (e) {
    // Fallback if locale detection fails
  }

  // Default to US if detection fails
  return "US";
};

export default function Contact() {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [detectedCountry, setDetectedCountry] = useState<string>("");
  const [phoneValue, setPhoneValue] = useState("");
  const [userCountry, setUserCountry] = useState<string>("");
  const allCountries = getAllCountries();

  // Create form with initial default
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      countryCode: "",
      message: "",
      projectType: "",
      budgetRange: "",
    },
  });

  // Auto-detect user's country on component mount
  useEffect(() => {
    const detected = detectUserCountry();
    setUserCountry(detected);
    setDetectedCountry(detected);
    form.setValue("countryCode", detected);
  }, [form]);

  // Auto-detect country from phone number
  useEffect(() => {
    if (phoneValue.length > 0) {
      try {
        const countryCode = form.getValues("countryCode");
        const parsed = parsePhoneNumber(phoneValue, countryCode as any);

        if (parsed && parsed.country) {
          setDetectedCountry(parsed.country);
          form.setValue("countryCode", parsed.country);
        }
      } catch (error) {
        try {
          const parsed = parsePhoneNumber(phoneValue);
          if (parsed && parsed.country) {
            setDetectedCountry(parsed.country);
            form.setValue("countryCode", parsed.country);
          }
        } catch (e) {
          // Could not detect
        }
      }
    }
  }, [phoneValue, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you within 24 hours.",
    });
    form.reset();
    setPhoneValue("");
    const detected = detectUserCountry();
    setUserCountry(detected);
    setDetectedCountry(detected);
    form.setValue("countryCode", detected);
  }

  return (
    <div className="animate-in fade-in duration-500 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div>
            <SectionTitle subtitle="Get in Touch">Start Your Project</SectionTitle>
            <p className="text-neutral-400 text-lg mb-12 leading-relaxed">
              Ready to build something robust? We are currently accepting new projects for the upcoming quarter. Tell us about your technical challenges.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call Us</h4>
                  <a href="tel:+919182234149804" className="text-neutral-400 hover:text-amber-500 transition-colors">+91 7827149804</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Us</h4>
                  <a href="mailto:hello@brownfishtech.com" className="text-neutral-400 hover:text-amber-500 transition-colors">hello@brownfishtech.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">HQ</h4>
                  <p className="text-neutral-400">
                    Flat 101 Tigri DDA Flats<br />
                    South Delhi - 110080<br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-900 border border-neutral-800 p-8 md:p-10 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-300">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-neutral-800 border-neutral-700 text-white focus:border-amber-600 focus:ring-amber-600/20" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-300">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@company.com" className="bg-neutral-800 border-neutral-700 text-white focus:border-amber-600 focus:ring-amber-600/20" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-300">Company (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Company Ltd." className="bg-neutral-800 border-neutral-700 text-white focus:border-amber-600 focus:ring-amber-600/20" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone Number with Country Detection */}
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <FormField
                      control={form.control}
                      name="countryCode"
                      render={({ field }) => (
                        <FormItem className="flex flex-col w-[140px] shrink-0">
                          <FormLabel className="text-neutral-300">Country</FormLabel>
                          <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  aria-expanded={open}
                                  className={cn(
                                    "w-full justify-between bg-neutral-800 border-neutral-700 text-white hover:bg-neutral-700 hover:text-white px-3",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value
                                    ? allCountries.find(
                                      (country) => country.code === field.value
                                    )?.callingCode
                                    : "Select"}
                                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-[300px] p-0 bg-neutral-900 border-neutral-800">
                              <Command className="bg-neutral-900">
                                <CommandInput placeholder="Search country..." className="text-white" />
                                <CommandList>
                                  <CommandEmpty>No country found.</CommandEmpty>
                                  <CommandGroup>
                                    {allCountries.map((country) => (
                                      <CommandItem
                                        value={`${country.name} ${country.callingCode}`}
                                        key={country.code}
                                        onSelect={() => {
                                          form.setValue("countryCode", country.code);
                                          setOpen(false);
                                        }}
                                        className="text-neutral-300 aria-selected:bg-neutral-800 aria-selected:text-white"
                                      >
                                        <Check
                                          className={cn(
                                            "mr-2 h-4 w-4",
                                            country.code === field.value
                                              ? "opacity-100 text-amber-600"
                                              : "opacity-0"
                                          )}
                                        />
                                        <span className="mr-2">{country.name}</span>
                                        <span className="text-neutral-500 font-mono text-xs ml-auto">
                                          {country.callingCode}
                                        </span>
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel className="text-neutral-300">Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="7827149804"
                              className="bg-neutral-800 border-neutral-700 text-white focus:border-amber-600 focus:ring-amber-600/20"
                              value={phoneValue}
                              onChange={(e) => {
                                setPhoneValue(e.target.value);
                                field.onChange(e);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {userCountry && (
                    <div className="flex items-center gap-2 text-xs text-amber-500">
                      <Globe className="w-3 h-3" />
                      <span>Auto-detected: {allCountries.find(c => c.code === userCountry)?.name} ({userCountry})</span>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-300">Project Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-neutral-800 border-neutral-700 text-white focus:border-amber-600 focus:ring-amber-600/20">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-neutral-800 border-neutral-700">
                            <SelectItem value="web-dev" className="text-white hover:bg-neutral-700">Web Development</SelectItem>
                            <SelectItem value="mobile-app" className="text-white hover:bg-neutral-700">Mobile App Development</SelectItem>
                            <SelectItem value="ui-ux" className="text-white hover:bg-neutral-700">UI/UX Design</SelectItem>
                            <SelectItem value="mvp" className="text-white hover:bg-neutral-700">MVP Development</SelectItem>
                            <SelectItem value="backend" className="text-white hover:bg-neutral-700">Backend & API</SelectItem>
                            <SelectItem value="maintenance" className="text-white hover:bg-neutral-700">Maintenance & Support</SelectItem>
                            <SelectItem value="other" className="text-white hover:bg-neutral-700">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="budgetRange"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-300">Budget Range (USD)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-neutral-800 border-neutral-700 text-white focus:border-amber-600 focus:ring-amber-600/20">
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-neutral-800 border-neutral-700">
                            <SelectItem value="lt-5k" className="text-white hover:bg-neutral-700">&lt; $5,000</SelectItem>
                            <SelectItem value="5k-10k" className="text-white hover:bg-neutral-700">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10k-25k" className="text-white hover:bg-neutral-700">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k-50k" className="text-white hover:bg-neutral-700">$25,000 - $50,000</SelectItem>
                            <SelectItem value="gt-50k" className="text-white hover:bg-neutral-700">&gt; $50,000</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-300">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project requirements..."
                          className="bg-neutral-800 border-neutral-700 text-white min-h-[150px] focus:border-amber-600 focus:ring-amber-600/20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 text-lg font-medium">
                  Send Message <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </div>
  );
}

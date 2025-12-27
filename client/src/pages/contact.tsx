import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

export default function Contact() {
  const { toast } = useToast();
  const [detectedCountry, setDetectedCountry] = useState<string>("");
  const [phoneValue, setPhoneValue] = useState("");
  const allCountries = getAllCountries();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      countryCode: detectedCountry,
      message: "",
    },
  });

  // Auto-detect country from phone number
  useEffect(() => {
    if (phoneValue.length > 0) {
      try {
        // Try to parse with the currently selected country first
        const countryCode = form.getValues("countryCode");
        const parsed = parsePhoneNumber(phoneValue, countryCode as any);
        
        if (parsed && parsed.country) {
          setDetectedCountry(parsed.country);
          form.setValue("countryCode", parsed.country);
        }
      } catch (error) {
        // If parsing fails, try to detect from international format
        try {
          const parsed = parsePhoneNumber(phoneValue);
          if (parsed && parsed.country) {
            setDetectedCountry(parsed.country);
            form.setValue("countryCode", parsed.country);
          }
        } catch (e) {
          // Could not detect, user can select manually
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
    setDetectedCountry("");
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
                  <Mail className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Us</h4>
                  <a href="mailto:hello@brownfish.tech" className="text-neutral-400 hover:text-amber-500 transition-colors">hello@brownfish.tech</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call Us</h4>
                  <a href="tel:+15550000000" className="text-neutral-400 hover:text-amber-500 transition-colors">+1 (555) 000-0000</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">HQ</h4>
                  <p className="text-neutral-400">
                    123 Tech District Blvd<br />
                    New York, NY 10013
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
                <div>
                  <FormLabel className="text-neutral-300 block mb-3">Phone Number</FormLabel>
                  <div className="flex gap-3">
                    <FormField
                      control={form.control}
                      name="countryCode"
                      render={({ field }) => (
                        <FormItem className="w-32 shrink-0">
                          <Select value={field.value} onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger className="bg-neutral-800 border-neutral-700 text-white focus:border-amber-600 focus:ring-amber-600/20">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-neutral-800 border-neutral-700 max-h-60">
                              {allCountries.map((country) => (
                                <SelectItem key={country.code} value={country.code} className="text-white hover:bg-neutral-700">
                                  <div className="flex items-center gap-2">
                                    <span className="text-amber-600 font-mono">{country.callingCode}</span>
                                    <span className="text-neutral-400 text-sm">{country.code}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input 
                              placeholder="555 123 4567" 
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
                  
                  {detectedCountry && detectedCountry === form.getValues("countryCode") && (
                    <div className="mt-2 flex items-center gap-2 text-xs text-amber-500">
                      <Globe className="w-3 h-3" />
                      <span>Country auto-detected: {allCountries.find(c => c.code === detectedCountry)?.name}</span>
                    </div>
                  )}
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

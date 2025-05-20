import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scissors, MapPin, Clock, Star, Phone, Facebook, Instagram, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Gallery } from "./components/gallery"

export default function Home() {
  // Business data
  const business = {
    name: "Fresh2Death Cutz",
    rating: 4.4,
    review_count: 28,
    category: "Barber shop",
    business_age: "3+ years in business",
    closing_time: "Closes 6 pm",
    location: "Denton, TX, United States",
    address: "Fort Worth Dr, Denton, TX 76210, United States",
    phone: "+1 945-295-5445",
    services: "Very professional and quick.. wonderful work",
    website_url: "https://sites.google.com/view/fresh2deathcutz/home",
    directions_url:
      "https://maps.google.com/maps?um=1&fb=1&gl=in&sa=X&geocode=KY2IVr3by02GMURhATAm6d8N&daddr=Fort%20Worth%20Dr%2C%20Denton%2C%20TX%2076210%2C%20United%20States",
    call_url: "+19452955445",
    instagram_url: "",
    facebook_url: "",
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Scissors className="h-6 w-6" />
            <span className="text-xl font-bold">{business.name}</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="#gallery" className="text-sm font-medium transition-colors hover:text-primary">
              Gallery
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center">
            <Button asChild size="sm" className="hidden md:flex">
              <a href={`tel:${business.call_url}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
            <Button variant="outline" size="icon" className="ml-2 md:hidden">
              <Scissors className="h-4 w-4" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative h-[70vh] w-full">
            <Image
              src="data:image/jpeg;base64,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"
              alt="Barbershop interior"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container px-4 md:px-6 text-center text-white">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">{business.name}</h1>
              <p className="text-xl md:text-2xl mb-6 max-w-[700px] mx-auto">Stay sharp. Look fresh. Cut with style.</p>
              <p className="flex items-center justify-center text-lg mb-8">
                <MapPin className="mr-2 h-5 w-5" />
                {business.location}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg">
                  <a href={`tel:${business.call_url}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg bg-white/10 hover:bg-white/20 text-white border-white/20"
                >
                  <a href={business.directions_url} target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2 h-5 w-5" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-lg bg-muted-foreground/10 px-3 py-1 text-sm">
                  <Clock className="mr-1 h-4 w-4" />
                  {business.closing_time}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Premium Cuts & Styles</h2>
                <p className="text-muted-foreground md:text-xl">
                  With {business.business_age}, we've perfected the art of barbering. Our team delivers professional,
                  fast service with an unwavering commitment to quality.
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(business.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">
                    {business.rating} ({business.review_count} reviews)
                  </span>
                </div>
              </div>
              <div className="relative h-[300px] overflow-hidden rounded-xl">
                <Image
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBUSEhIVFRUXFxUWFRUVFxUVFRYXFRUXFxcVFhcZHiggGBolHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAPFSsZFRkrKysrKystKy0rKysrKystKys3Ny03Ky0tLTctLS03LSsrKystKy0rLS0rKysrKysrK//AABEIANgA6QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBAUGBwj/xAA9EAABAwIDBAgEBQIGAwEAAAABAAIRAyEEEjEFQVFhEyJxgZGhsfAGMsHRB0JScuFi8RQjM6KywkOCkhX/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EAB0RAQEAAwEBAAMAAAAAAAAAAAABAhEhMQMSIkH/2gAMAwEAAhEDEQA/APT8qWRSBqcGrKoCxNbSVrInhiCp0ac1inLEQ1BDlSyqbKhlQMDUYTgFT2ljBSYXO0Ak8TwA7Sgi2rtWnh2F7yIGsmAO30gLzTa3xbiMY7LSe6mwmGsp2qPH6nu1Y3gBc8YVf4hx5xlZzC45KYLnEGGgi7vD5R/dZlDFNpOOTUzJEN5FoPlP1UakabxhsO3/AD6tSo82NNjneDnEyfE9i6DY/wATYZkNZLYAscjgOToh7T5Lz7ECkL1HDWTlknkDu8+CfhcdQY5uWk1oiCbFx8RA8UXT3bCVc7QY10ggg9hGqsZV5FgviKrRbNKn0jLGJsOYEgjnusV02B+L3tAzU6ZkgENqh7mzxDS8jvVZsdsWoZVyuI+N6TJhgJBizwfoPoqtD49D3QKYjcS4Cd24lDTs4QhYdP4oZE1GZRa7XB4vbdu56LWwuMp1QCxwIOh3HsOhPIK7RLCEKTKhlVEZCUKSEIQRwhCkhKEEUIEKWEIQRwlCfCUILoCcGpwCICyGQpAEg1PAQRFqQankJBAwtQhSwhCCFwXlnx/tgms9snKyWMaNDUDRL+cZiO1el7YxYoUH1T+UEjt3Lwjbu0M7jLiYEGd73mX+aVYYajW4clxPSVCD+1gMmeJJXPYjaP5WWG873fbs5lR47Fk79/kP5Wbm3pFtWv8AEsBk5j3x5wtbAmjUFs4OsGXQN7gWkFzRvjRYRxAB0BHAhsekq3hagcJonJUBBDJs47jTJ37sp42JsDdG3RMxDqNyWvYbtLQ1zS4X3yQYBtrYrJxu1s5OYWmCGm4neD+ZvmN/OertWk9g6Rha6zndGTTIeCJiQQNeB3A74znYOlWnoKuWST0dVsHjAeyQR2hqCzgqVNjTUbUqAWaXZmkMJ/UDvN/G3EbmHqsc0Bzg6Y1IY/mWmPm4AkgxAIJXK0KdTDP64ADhlc10mnUadW5myDuMg2IB3JxoVKXWph5pyYc0hzTydEtJ3GbKm3cCtVokuw9YPaYhhBF/1MIM5psRJkzeRC6HYHxMXNL3AudEEywB2vz5gb2MONhy3+b7O2sCcruqHWfwINs0TyEgkSNCIT6dU0KxhxmxmZzDn+oW1NxAOmkHpDPjv/M6MCow5snWFJwkGIgCn33dC6TDfG2Fd8xcOJyOAb+4HQ8hK8i2k9jg2owloIAIuQ2LXbf5ZOmnDQKvgW4tlaKZkSXayzKSTIdPVHNp33QfQGA2jRrg9FUa+NQD1hPFpuO8K1C8Zw2NdTdIOUgCCwgFpFvmbaJtmg8xddzsn40ZlH+IIaLDpNBJ0DxuPMWOoRNOtIQIQo1mvEscHDi0g+ieQqhkIQnwkgjhKE+E1BfATgEQEVkJGEUkDCEgE4hEIGwgQnoFBxn4l4wMwuXiQe07geS8KxlU5iea9a/FnE9VjBvGY+NvReRVzv3lGopuceEjgQCP90+SLqDXDrMyn+gj/ibeBCZWBF+6eJ4Sqz6rjvjssqLtPZrSLlw/dlbfnYwO9S//AJkCerH9Tmkdkg/RZjWzxKlZRdqI8/siNSs01Lywv0lpaS4WjNJmRGu/zMrKDh8xDeZa2OVws6kx5/T4kev2V1pfSEmjUHE5W1GgHeXMykDvRWgxtMiKjwSYvOU8uq8dfxHYVTdgqlIk0HkEGerpBEEEcDaxkGBoq76uHe0fqPGQ2eM3gciT2qeg6m0huY05uBILDwLZ0KBzawrwHNayruAgUq/YNGVOzXduBgxtM9Hb8p6u5zDvb2eOnYTLjwLwQ4amZzDk8HrHiH3PZcJ2GxwceuZ3S6+af1nfO89/MEVMJjeodxBHg7qmfEeJ1WzhKLC1zSJZq+nJzU83/kpngeGliRBEDDxNHo6pA+UiRN5BlHC4vKdSI3C8aSWnhyPAcoqp6WbC1iMxOUxP6mnQxzC39nYq5pkyHEPAMkAZg6OyS7uO7flVKRrdZgaXAWbuI17/AMxA58oUdGtDmu/Nkjvks18R2qD0n4R2jQGIGXqNeAIkzTO5uawLJ0Oo36yfTQF827PrOpVGuDpYdeAIGsbt2n3Xs3wL8RtxFPo3HLVbq2bOBAOZnAXNkSusypQnwgQqiMtQyqWEIQXE4IBFZCToQRQNSRRCoCDhZPhBB5D+Kc9JEbgAe8x6leZVD1iNV7V+Juyy+nnbqAR3TP0XilVtzNuKy0bqIt4SBfdz7k99RjWklz+wadpv/KpvrRpru9+/tC9w/MMx4TYcyT8x8u1aFg16Lp6l+Je4k+Mz4KShTn5GtMbusfUNCz5aTLmOP/sGjwDVZo5SeqxvIOJPpr4IL5rlln0SOLmw4d4E+oUuGxLCepVDeQMO/wDl4HkU3DY2s27WtAH5S59QCeEg5VK/amHqSK1Ngd+oZTB4kH5vJA6phRWd/mZXGbPpkU6htvDxLjreXKlitmvZIpxVaJJYRlqDnkOu67ddykGBaf8AQqxyBL2G35mHrDuz9gTTj61GBUaIBOU2LeHUcLDs14hBWoYoC0EgWykw9sH8jj6HXzUeIoCM7Lt00iCfyub+U+R3K7VxVCv84LHH84h3c4G8aXM/avRpuDuqWv3C+vK//F3cZsgY1+dgBPWb8u48oPH+OKgq7nCx1I9SPt7BriHG2U8L7u1LNmHPf90RNgqpAi8G4g3a4aR6X4q/iMYTSY6ARmqCoBvnIQ8b2mXOv/VeQb5VN8FTNq5ezrSDoQ43nyRV8hrjAEFwtFs03MD9XLsNt9zAbU6PEyw5SwthwnVujuY3dhKyYgNvobHWNId6TxSxEsxObQHJpoOqLdkJR9IfDW1Ri8MyrbNdrwDMOGv0K1CvKPw0210FU03S5lUMMieoc2RriOBzNB7uC9ZhVmmQlCdCEIi0EUE5RSRQRQAohBFAkkkkFPaeDbWpljhIK8E+Lvh84as8GzQC6f6bkDviF9DOXjf4s43O8UmxbK555CYYO03PCBxWa1i8sLLk+HegaTgJsPAfcp9QkkwJO6Bb+VE6i6Ze6DzIJ8A6VoTB5GrxHIH1IUb304/1J/pLA/wc0AtTM0Gczf8A5APjlnzRGMZ+YF3mPNVDS9zflfPYY8JumuxpMh5n9zc3+4dbzUrcfTH/AIu4EX8R6J52lSMA0nDv17f7IKgiZY6DyJB7rK3R2vWp2dFRsQQ8TI4Hj3gqCs6k75RHaHD0EKq+2htyJ/sg0X16FQdVppO4C7D3GI7oCgNJ2oLXftvbm0/RUw/2U8VvDxTRtfbi5EPAeNJF3fwRbw71FUYGw5jszeO8cnDcVAKgPv1lPBMyL8Y+qBZwTzUzHzY9g5Hd3KuWh2ljy3fZAGDDggu0nhwAOlie46K009M4n+oN/wCrT5NPYCs6u+MpB4nvgeOnuVc2e/I4nhld2wZ/4koNvYO030arXMMFoaydxmC+eIykr6Ko1A9oc0ghwBBGhBuIXzRh6UGiDo5xpuIMTkJyk9wjsC94+A8c+tg2h4vTimDaHNDWlhtyMdyFdCkkkjKwnJqIUUUUEUCSSRQBKEUpQVdoVslMkrwX43f0tVx3SdPe6F7Zt6pbL/SSvGNt4eXu7Trosb66SccRXkaWHBVzmgn33rYxWGMm3AW7AB6Km/DOn373rSM0gjX0b9kC4b58vsrT6duz391CaXsqsmNxAHHyP0SGJ4saeZH2Qez3uUZCoL3tJsA3s/kpCeM+IQgpZOFkBLRvt75JhZ3p4nt7/omW7PfJEBEPhCfdkcqokzA/cJzm9n0VfTkpaZnlzH1UE1J0CDp6dqnoG5E/lI4flcPqFWzZYzeITqRyvubTrxlFatOu7LINxly346n/AHu8F7V+EuIc7CPpkWpvgO4l8vc3uLpjdmXhNOqZgQL3MAwBcnt07wvfPwnwmTAF0R0lR5A5NhpJ5lwf5IV2RCSKCInRCrtxCd06gnRKgFcJ3TBA9OUPTBHpgglSUXThNq1rHsKDD2tXzPPCIlef7YwPWNl2GHfnoNdv0Pas3aNAESexcbeu8nHAvwMOgi+7kqb8DBkD+2i6uthJPH3/AHUBwJcYaJJ0AvM8lfyT8XG18BwGuvaRqqJwpB00C9Ar7HqMHWYR2iPVZON2eQSY18yN/arMi4ORrYGTYc53cVUdhDBtZdS+lBiLRpzNoPgqbsLrOuh7VrbFjn+gO9MLFsVcL1o5GPGPFVq+Gg2VTTPNNRuYf7/dXqlPX3yUL2/QqppUc3iE2O9WHt3blG5vv3qFUMkER5FNhEtTtyCSmZEeR+6bVMRyTWeXopa9xPD3/HcguYO750Fj4y6/KYX0P+GjidmUJEf6kcx0jtecyvnnAtEe+A+/kvpP4NwnQYChTdEhgJ4S8l3/AGRa20oTcyGdEV6dEwn9CVaYnrIoikU/oyracqM80yndGVchOAVFHoiiaZV1KEHKnD9E59PcTmb3/wAqniqRLV0O1cLJD+7xWTiqdrLhlOvRhdxzWIpwZHYo27WGBYapp5iTGsEAax2/RX8TT1nXVZ21cO2pSLCLH7LFreEm+ugwG16WPw2dosSWuDolrhuPcQe8LjdozTqOY643HktD4cw4w2CZHzF7+k5kHKD4AHvWft0hz2OO+yf100x8RRvIvefD+6hrURJGl9efHzldJSwYa2D2rFxtIgGLEWHOFvGuGUYWIFz5d8KnWaL9/otPFUCCfdlSew+/fb4rpHJnilxVao2FqVh6ff7qsaVvPxVRnPCEK1VpX98FXcFUQ5UCxSu0TJVAdTsO9Ii3vmpWC/vvT20pPveiNX4YwBrV6VLc5wBjgTfyHkvoykMoAGgAA7AuB/CX4TLB/jKzYJEUQdeDnxu0gdpXpvRBItU85QzFXehCHQhVEtMqZMY1SLCgikiqhqISRCoSSSSCntJ8NWBja4A3StHbVaHRwXJ7TxN9Y98Fwy9ejCcR4vEgmx3xCkwuFFSxsNSeQ1WQa0kX3+Xv1WxQqOyljW5i8Fo7/fksV0jOqkFlNrDLS9xB5B5H0WBtp0AQd9uV10j8EcMwB5BLWBjSNJPzHumFy+0HAiTqTYdmikdb40Nn4rM3K7VQ41kzu1IKq4ExotDEkGJWo45MXFtzX3AHtJ9+qz3sMmBaBHedPPyWpVbExu08dJVRzbcbdgHFdY4VmVKZ0F9JUL6e87/otJ7Qd3M+dlWqUo98FUZ1WnPbp4+/MqrWZvWhWtNvepVWsxVGfUYmQrLmJgpErSFTau3/AA2+GBjcSDUE0qfWqc72ZPP0lcthMKTAAv6yV9DfBGwRgcIynEVHQ+r+4j5ewC3ioN9oAsNEUklUAoIpIJwigEllSRKCKoCcE1EIgpIJKjmfiF8VD2A+S4na+Lub8L/Rdp8aQwNed4jw9+S8u2picziRxgcZI18AuGU69GN/VfwhMXuSB6adq6TZxIc3v9FxeGxIYIPER3/VdXg6uanIMHKQPBZrUrH+LttyTG6zQPVcvhK7qjpdusB73rRxuGc43UWGw+W0I3atYNsGFfewnh73KLCUd6uimjNZeKpk8CqGIolusXW7UpT78lUr0gPYM+ytyuVjEffX63081G9p7vWVdrDfr5X4Ks+kdeMW3LbKhUpybKu6jfj70Wm6l9u5MqUe5VlkOpp9Ogr5w/epqOFuPTeeXog6v8LPh7psR0z2/wCXSh19HPPyjugu7hxXsRWR8JbK/wAJhKdMjrEZ6n73AEjusO5bC1GdgkkkqEkkkiJZSCaistHSkgESgSKbKcgMoIJIjkPxMdGEkatcD5FeSmp1cxv1hlHE6fVevfiJhy/CPvoCfJeH1sRDYMW048FzynXXHxsU6zS0Ei8z37l0uzMUMsDyXAYXE6g2sCecXjxldTsCtIHKO/tWbG5WviKG/wAVW6IFarRaFXOGgrDogYyIUjnXHvj/AAnvEdqjsUDKjY87fys+u0SbrRqKhVbM319+K3GMoqGl9bbkx1GB37vurnQ2siBb39VdsM51JMOHn3wWqKItx8UW0JWts2MoYX34Lp/gPYXTYoPcJZS6x5u/KPG//qqAwy9M+EMD0OFbxeS8+g8h5rUZvI2kCnILbAIIlMc5AZSlRlyWZFWAimhFZUZRJTUigITlGE8FAUkJSRGR8V082EqjWWlfOmJEvIAgCx8dV9I/EDZw1Qf0n0XzVj6kVnRpp/KzfXTHw0OAdfv810mwMaS6NR70XJ9HeQbbls7FrxG43P0UsWV31CrIWr0fVWFsoZyBPD+Fvk2A9lca7xn4gcFTmFerBUnqAPEqJzFMNU7KtJYr5OCbkjzlWCOajlVnRU6amFPkiwKUtWozYdh6MnRem4enlY1vAAeAhefbPpS9v7h5leirpg55kmkolNK25g4qNxRcmFRSQhKUpUFoIoBFFJJAIlAk5MTkBQSKSogxzA6m4HSD6L5e+IW5cQ+P1HTSxK+p3CRBXh/4q/CNSnVNemwupuu7KLNKzVjzek8ytXZ9aHAdmix6b4N1aoVYMqWLK9Y2EwQDvI/ha7xeeWip7FYOiYeLQfJXHDcuFemKtVUaokq/V10UApe9VFQUmpzgpwwBNcEgqkIAKXKkFrbJ1Nse7qZgTRdOaI3qpppbN/1Gfub/AMgu9K4HZn+ow/1N9Qu+K6/Pxw+gFNKKBXRzMcoipXJhUWGooEoSoq2ESkkgAKLikkgaHKRJJAkJSSQJNqMDhDgCDqDdJJByW1/w42diXF7qWVx1LCWz3BY1f8HsCflfWZfc4H1CKSaEtDCik3ogZDOoCYBOXqye2E4tEW08kUl5svXrx8VqgUYSSWWj3KB4SSREbkIBISSW4iQJ4KSSrNWcG/K5p0AIPgV6DRrNe0OY4OabhzSCCDvBGqCS7fPxw+h6a5JJdHMxyjJSSWVhjimZkUlFf//Z"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                  <Scissors className="mr-1 h-4 w-4" />
                  Premium Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Expert Grooming Services
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  From classic cuts to modern styles, we provide top-notch barbering services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
              {["Classic Cut", "Beard Trim", "Hot Towel Shave"].map((service, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <div className="relative h-[200px]">
                    <Image
                      src={`public/download.jpg=${service}`}
                      alt={service}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="relative z-20 -mt-12 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{service}</h3>
                    <p className="text-white/80 text-sm">Professional quality service</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 mx-auto max-w-3xl text-center">
              <Card className="bg-muted">
                <CardContent className="pt-6">
                  <blockquote className="text-xl italic">"{business.services}"</blockquote>
                  <div className="mt-4 flex justify-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(business.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">Satisfied Customer</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                  <Scissors className="mr-1 h-4 w-4" />
                  Our Work
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Gallery</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Check out our haircut styles and shop interior
                </p>
              </div>
            </div>
            <Gallery />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Ready for a Fresh Cut?</h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl mb-8">
              Visit us today or call to schedule your appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <a href={`tel:${business.call_url}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {business.phone}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                <a href={business.directions_url} target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-5 w-5" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t bg-muted">
        <div className="container px-4 py-12 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Scissors className="h-6 w-6" />
                <span className="text-xl font-bold">{business.name}</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Your destination for premium cuts and styles in Denton, TX.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3 text-sm">
                <p className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 shrink-0" />
                  <span>{business.address}</span>
                </p>
                <p className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  <a href={`tel:${business.call_url}`} className="hover:underline">
                    {business.phone}
                  </a>
                </p>
                <p className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  <span>{business.closing_time}</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Button asChild variant="outline" size="icon" className="opacity-50">
                  <a href={business.facebook_url || "#"} target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="opacity-50">
                  <a href={business.instagram_url || "#"} target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <a href={business.website_url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5" />
                    <span className="sr-only">Website</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} {business.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

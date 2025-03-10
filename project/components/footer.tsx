
import Link from "next/link"
import { Code, Github, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              
              <span className="font-bold text-lg">WEBDRIFT</span>
            </div>
            <p className="text-muted-foreground">
              Building the future with modern web technologies.
            </p>
            <div className="flex space-x-4">
              {/* <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://github.com" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link> */}
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">Next.js Development</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">React Applications</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">Node.js Backend</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">Database Solutions</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">Web Hosting</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {/* <li><Link href="/#" className="text-muted-foreground hover:text-primary">Home</Link></li> */}
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/for-whom" className="text-muted-foreground hover:text-primary">for-whom</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/policy" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/policy" className="text-muted-foreground hover:text-primary">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} WEBDRIFT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-white border-t">
      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8">
            See all you can accomplish in Enos.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/logo.png"
              alt="Enos"
              width={120}
              height={40}
              className="h-8 w-auto mb-4"
            />
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">PRODUCT</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-gray-900">Watch Demo</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Accessibility</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Featured Releases</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Changelog</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Status</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">FEATURES</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-gray-900">Customer Management</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Sales Connect</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Workflow Builder</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Messaging</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Canvas</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Lists</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Clips</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Apps & Integrations</Link></li>
              <li><Link href="#" className="hover:text-gray-900">File Sharing</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Enos AI</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Agentforce</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Enterprise Search</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Security</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">SOLUTIONS</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-gray-900">Engineering</Link></li>
              <li><Link href="#" className="hover:text-gray-900">IT</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Customer Service</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Sales</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Project Management</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Marketing</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Human Resources</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Security</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Manufacturing</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Technology</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Media</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Financial Services</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Retail</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Public Sector</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Education</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Health & Life Sciences</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">RESOURCES</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-gray-900">Help Center</Link></li>
              <li><Link href="#" className="hover:text-gray-900">What's New</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Resources Library</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Enos Blog</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Community</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Customer Stories</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Events</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Developers</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Partners</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Partner Offers</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Enos Marketplace</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Enos Certified</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">COMPANY</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-gray-900">About Us</Link></li>
              <li><Link href="#" className="hover:text-gray-900">News</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Media Kit</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Brand Center</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Careers</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Swag Store</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Engineering Blog</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Design Blog</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <span>Change Region</span>
              <Link href="#" className="hover:text-gray-900">Privacy</Link>
              <Link href="#" className="hover:text-gray-900">Terms</Link>
              <Link href="#" className="hover:text-gray-900">Cookie Preferences</Link>
              <Link href="#" className="hover:text-gray-900">Your Privacy Choices</Link>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-gray-600">
              ©2025 Enos Technologies, LLC. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

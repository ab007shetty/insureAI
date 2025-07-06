import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">InsureAI</span>
            </div>
            <p className="text-gray-400">
              Smart insurance for the modern homeowner. Powered by AI, trusted by thousands.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Coverage</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Home Insurance</li>
              <li>Property Protection</li>
              <li>Liability Coverage</li>
              <li>Natural Disasters</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Claims</li>
              <li>Customer Service</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 InsureAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
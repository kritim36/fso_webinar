// components/ContactOptions.js
import { Mail, Phone, LifeBuoy } from "lucide-react";

export default function ContactSection() {
  const contacts = [
    {
      icon: <Mail className="w-8 h-8 text-gray-600" />,
      title: "Email us:",
      description:
        "Email us for general queries, including marketing and partnership opportunities.",
      linkText: "hello@flowbite.com",
      link: "mailto:hello@flowbite.com",
    },
    {
      icon: <Phone className="w-8 h-8 text-gray-600" />,
      title: "Call us:",
      description:
        "Call us to speak to a member of our team. We are always happy to help.",
      linkText: "+1 (646) 786-5060",
      link: "tel:+16467865060",
    },
    {
      icon: <LifeBuoy className="w-8 h-8 text-gray-600" />,
      title: "Support",
      description:
        "Email us for general queries, including marketing and partnership opportunities.",
      linkText: "Support center",
      link: "#",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-6 grid gap-10 md:grid-cols-3 text-center">
      {contacts.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <div className="p-3 rounded-xl bg-gray-100">{item.icon}</div>
          <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
          <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
          <a
            href={item.link}
            className="mt-3 text-blue-600 hover:underline font-medium"
          >
            {item.linkText}
          </a>
        </div>
      ))}
    </div>
  );
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto prose-ol:mb-6 prose-p:mb-4 prose-ul:mb-6 prose-ol:list-decimal prose-ul:list-disc px-4 py-24 prose-ol:pl-6 prose-ul:pl-6 prose-em:font-bold prose-a:text-blue-600 prose-a:underline">
      {children}
    </div>
  );
}

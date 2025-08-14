export default function SeoTextBlock({
  title,
  paragraphs,
}: { 
  title: string; 
  paragraphs: string[] 
}) {
  return (
    <section className="container mx-auto px-4 mt-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
        {paragraphs.map((p, i) => (
          <p key={i} className="text-gray-600 leading-7 mb-4">{p}</p>
        ))}
      </div>
    </section>
  );
}

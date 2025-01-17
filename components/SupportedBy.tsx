import Image from 'next/image'

const supporters = [
  { name: 'Lustgarten Foundation', image: '/assets/images/lustgarten.png', id: 'lustgarten' },
  { name: 'Microsoft AI for Good', image: '/assets/images/microsoft.jpg', id: 'microsoft-ai' },
  { name: 'Johns Hopkins Medicine', image: '/assets/images/jhm.jpg', id: 'johns-hopkins' },
];

export function SupportedBy() {
  return (
    <section id="supported-by" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Supported By</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supporters.map((supporter) => (
              <div key={supporter.id} className="flex justify-center">
                <div className="w-48 h-24 relative">
                  <Image
                    src={supporter.image || "/placeholder.svg"}
                    alt={supporter.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


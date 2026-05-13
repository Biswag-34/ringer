"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { PackageCheck, Pill, X } from "lucide-react";
import type { DivisionData, DivisionProduct } from "@/types/division";

function getIngredientItems(product: DivisionProduct) {
  const details = product.fullIngredients || product.composition;
  return details
    .split("+")
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function DivisionProduct({ data }: { data: DivisionData }) {
  const [selectedProduct, setSelectedProduct] =
    useState<DivisionProduct | null>(null);

  useEffect(() => {
    if (!selectedProduct) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [selectedProduct]);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold text-blue-600 tracking-wider">
            THERAPEUTIC SOLUTIONS
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 text-gray-900">
            Products & Formulations
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {data.products.map((product, i) => {
            const imageSrc = product.normalImage || product.image;

            return (
              <motion.button
                key={`${product.name}-${i}`}
                type="button"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProduct(product)}
                className="group text-left bg-gradient-to-br from-blue-50/50 to-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-blue-50"
              >
                <div className="h-60 w-full border-b border-blue-50 bg-white p-4">
                  <div className="relative h-full w-full">
                    <Image
                      src={imageSrc}
                      alt={product.name}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-gray-900 leading-snug">
                      {product.name}
                    </h3>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <Pill className="h-4 w-4" />
                    </span>
                  </div>

                  {product.highlight && (
                    <span className="inline-block mt-3 px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                      {product.highlight}
                    </span>
                  )}

                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                        Key Ingredient
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-gray-700">
                        {product.keyIngredient || product.composition}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <PackageCheck className="h-4 w-4 text-blue-500" />
                      <span>{product.form}</span>
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center overflow-hidden px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-slate-950/45 backdrop-blur-sm"
              onClick={() => setSelectedProduct(null)}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selectedProduct.name}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 grid max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl md:grid-cols-[0.95fr_1.05fr]"
            >
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                aria-label="Close product details"
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-md transition hover:bg-blue-600 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="bg-gradient-to-br from-blue-50 to-white p-5 md:p-8">
                <div className="relative h-[300px] w-full md:h-full md:min-h-[520px]">
                  <Image
                    src={selectedProduct.detailImage || selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                </div>
              </div>

              <div className="max-h-[88vh] overflow-y-auto p-6 md:p-8">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  {selectedProduct.form}
                </span>

                <h3 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">
                  {selectedProduct.name}
                </h3>

                {selectedProduct.highlight && (
                  <span className="mt-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {selectedProduct.highlight}
                  </span>
                )}

                <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                    Key Ingredient
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">
                    {selectedProduct.keyIngredient || selectedProduct.composition}
                  </p>
                </div>

                <div className="mt-5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Full Ingredient Details
                  </p>

                  <ul className="mt-4 space-y-2">
                    {getIngredientItems(selectedProduct).map((item, index) => (
                      <li key={`${item}-${index}`} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        <span className="text-sm leading-relaxed text-gray-700">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

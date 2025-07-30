"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function InteractiveRatingComponent() {
  const [rating, setRating] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating) {
      setSubmitted(true);
    }
  };

    return (
    <div className="bg-[hsl(216,12%,8%)] min-h-screen flex items-center justify-center font-overpass">
      <main className="bg-[hsl(213,19%,18%)] rounded-3xl p-8 max-w-sm mx-4">
        {!submitted ? (
          <form onSubmit={handleSubmit} id="form" className="text-white">
            <div className="bg-[#7c8798] rounded-full w-12 h-12 flex items-center justify-center">
                <Image src="interactive-rating-component/img/icon-star.svg" alt="star" width={16} height={16} />
            </div>
            <h1 className="text-2xl font-bold my-4">How did we do?</h1>
            <p className="text-[#959eac] mb-6">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <div className="flex justify-between mb-6">
              {[1, 2, 3, 4, 5].map((rate) => (
                <div key={rate} className="relative">
                  <input
                    type="radio"
                    name="option"
                    id={String(rate)}
                    value={rate}
                    onChange={() => handleRating(rate)}
                    className="bg-[hsl(216,12%,54%)] hover:bg-[hsl(217, 12%, 63%)] opacity-0 absolute"
                  />
                  <label htmlFor={String(rate)} className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer ${rating === rate ? 'bg-[#fb7413] text-white' : 'bg-[#7c8798] text-gray-300'} hover:bg-[#959eac] hover:text-white`}>{rate}</label>
                </div>
              ))}
            </div>
            <button type="submit" className="submit w-full bg-[#fb7413] text-white py-3 rounded-full uppercase tracking-widest hover:bg-white hover:text-[#fb7413]">
              SUBMIT
            </button>
          </form>
        ) : (
          <div className="text-white text-center flex flex-col items-center">
            <Image
              src="interactive-rating-component/img/illustration-thank-you.svg"
              alt="Thanks"
              width={160}
              height={108}
              className="mb-6"
            />
            <div className="bg-[hsl(214, 8.80%, 35.70%)] text-[#fb7413] rounded-full py-1 px-4 mb-6">
              <p>
                You selected {rating} out of 5
              </p>
            </div>
            <h1 className="text-2xl font-regular mb-2">Thank you!</h1>
            <p className="text-[#959eac]">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
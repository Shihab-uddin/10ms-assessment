// lib/fetchCourseDetails.ts

export async function fetchCourseDetails(lang: 'en' | 'bn' = 'en') {
  const res = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      next: { revalidate: 60 }, // ISR: cache for 60 seconds
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch course data (${res.status})`);
  }

  const json = await res.json();

  return json.data; // ✅ Only return the useful data
}

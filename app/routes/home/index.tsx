import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev" },
    { name: "description", content: "Custom website development" },
  ];
}

export default function Home() {
 const now  =new Date().toISOString()

 if (typeof window === 'undefined') {
  console.log('ssr' ,now);
  
 } else {
  console.log('csr', now);
 }

  
  
  return <>
  </>;
}

# What are some differences between interfaces and types in TypeScript?

TypeScript-এ interface এবং type দুটোই অবজেক্টের স্ট্রাকচার ডিফাইন করার জন্য ব্যবহার করা হয়। একটা interface দিয়ে আরেকটা interface কে এক্সটেন্ড করা যায়। কিন্তু type ব্যবহার করে & অপারেটরের সাহায্যে
আরেকটা type কে একসাথে করা যায়। এক নামে দুইটা interface থাকলে দুইটা interface একসাথে একটা স্ট্রাকচার ডিফাইন করতে পারে। এক নামে দুইটা type ব্যবহার করা যায় না। এরর থ্রো করে। interface শুধুমাত্র অবজেক্ট বা ফাংশন টাইপের জন্য ব্যবহার করা যায়। type ব্যবহার করে  প্রিমিটিভ, ইউনিয়ন টাইপ, টুপল ডিফাইন করা যায়।
 



# What is the use of the keyof keyword in TypeScript? Provide an example.

keyof হলো Typescript এর একটি কি-ওয়ার্ড। keyof ব্যবহার করে অব্জেক্টের সবগুলো কি-ভ্যালু প্রোপার্টির মধ্য থেকে সবগুলো কী কে ইউনিয়ন টাইপ হিসেবে বের করে নিয়ে আসে। যেমনঃ 

interface Person {
  id: number;
  name: string;
  age: number;
}


type PersonKeys = keyof Person; ===  PersonKeys = "id" | "name" | "age"



keyof কি-ওয়ার্ড টাইপ সেইফটি তে কাজে লাগে। 


const key : PersonKeys = "salary"; [এটা এরর থ্রো করবে। ]


এছাড়া keyof জেনেরিক ফাংশন, ইউটিলিটি ফাংশনে ব্যবহার করে টাইপ সেইফটি তে কাজে লাগে।

# Next-Level-Web-development-Assignment-1

2. What is the use of the keyof keyword in TypeScript? Provide an example.
keyof হলো টাইপস্ক্রিপ্টের একটি খুব গুরুত্বপূর্ণ টাইপ অপারেটর, যা কোনো অবজেক্ট টাইপের সবগুলো কী-কে একসাথে একটি ইউনিয়ন টাইপ হিসেবে প্রদান করে।

অর্থাৎ, তুমি যদি কোনো অবজেক্টের টাইপ নির্ধারণ করো, তাহলে keyof সেই অবজেক্টের সব প্রপার্টির নামগুলোকে একটি টাইপ হিসেবে বের করে আনে।

উদাহরণ:
type User = {
  id: number;
  name: string;
  email: string;
};

type UserKeys = keyof User;

const getValue = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

const user: User = {
  id: 101,
  name: "Rakib",
  email: "rakib@example.com",
};

console.log(getValue(user, "name")); 


3. Explain the difference between any, unknown, and never types in TypeScript.

any
•	সব অ্যালাও করে
•	টাইপস্ক্রিপ্টের টাইপ-চেকিং কমিয়ে দেয়
•	বেশি ব্যবহার করলে টাইপস্ক্রিপ্টের আসল সুবিধা পাওয়া যায় না

unknown
•	ইনপুট যেকোনো টাইপ হতে পারে, কিন্তু
•	ব্যবহার করার আগে অবশ্যই টাইপ-চেক করতে হয়
•	এপিআই থেকে আসা ডেটা বা পরিবর্তনশীল ডেটা ব্যবহারের ক্ষেত্রে এটি খুবই উপযোগী


never
•	এমন সব ফাংশনের জন্য ব্যবহৃত হয়, যেগুলো স্বাভাবিকভাবে শেষ হয় না বা কিছুই রিটার্ন করে না
•	যেমন সবসময় এরর থ্রো করে
•	অথবা এমন জায়গা যেখানে লজিক অনুযায়ী কোনো ভ্যালু থাকা সম্ভব নয়
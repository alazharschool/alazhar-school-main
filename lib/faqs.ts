export interface FaqItem {
  question: string
  answer: string
}

export interface FaqCategory {
  category: string
  questions: FaqItem[]
}

export const faqCategories: FaqCategory[] = [
  {
    category: 'General Questions',
    questions: [
      {
        question: 'Do teachers speak English?',
        answer:
          'Yes, all our teachers are fluent in English and Arabic. Many of our instructors also speak additional languages including French, German, and Urdu to better serve our diverse student community.',
      },
      {
        question: 'Are certificates provided?',
        answer:
          'Yes, we provide official certificates of completion for all our courses. These certificates are issued upon successful completion of the program and meeting all requirements. Our certificates are recognized by many Islamic institutions worldwide.',
      },
      {
        question: 'What payment methods are available?',
        answer:
          'We accept various payment methods including major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and direct bank transfers. We also offer payment plans for longer courses.',
      },
      {
        question: 'How are lesson times scheduled?',
        answer:
          'We offer flexible scheduling to accommodate students across different time zones. You can choose from available time slots that work with your schedule. Our booking system allows you to reschedule lessons up to 24 hours in advance.',
      },
    ],
  },
  {
    category: 'Course Information',
    questions: [
      {
        question: 'What age groups do you teach?',
        answer:
          'We welcome students of all ages, from children (6+) to adults. Our teaching methods are adapted to suit different age groups and learning styles. We have specialized programs for children, teenagers, and adults.',
      },
      {
        question: 'How long does it take to complete a course?',
        answer:
          'Course duration varies depending on the program and your learning pace. Typically, Arabic language courses take 6-12 months, Quran memorization varies greatly based on individual goals, and Islamic Studies courses range from 3-6 months.',
      },
      {
        question: 'Can I switch between different courses?',
        answer:
          'Yes, you can switch between courses or take multiple courses simultaneously. Our academic advisors will help you create a learning plan that suits your goals and schedule.',
      },
      {
        question: 'Do you offer group classes?',
        answer:
          'Yes, we offer both individual and group classes. Group classes are available for families, friends, or students at similar levels. Group classes also come with discounted rates.',
      },
    ],
  },
  {
    category: 'Technical Support',
    questions: [
      {
        question: 'What technology do I need for online classes?',
        answer:
          'You need a computer, tablet, or smartphone with a stable internet connection, a webcam, and a microphone. We use user-friendly video conferencing platforms that work on all devices.',
      },
      {
        question: 'What if I have technical issues during a lesson?',
        answer:
          'Our technical support team is available during all class hours. If technical issues prevent you from attending a lesson, we\'ll reschedule it at no extra cost.',
      },
      {
        question: 'Are lessons recorded?',
        answer:
          'Yes, with your permission, lessons can be recorded for your review. This helps you revisit important concepts and track your progress. Recordings are stored securely and only accessible to you and your teacher.',
      },
    ],
  },
  {
    category: 'Pricing and Payments',
    questions: [
      {
        question: 'Are there any hidden fees?',
        answer:
          'No, our pricing is completely transparent. The prices listed on our website include all teaching materials and resources. There are no registration fees or hidden charges.',
      },
      {
        question: 'Do you offer refunds?',
        answer:
          'Yes, we offer a satisfaction guarantee. If you\'re not satisfied with your first lesson, we\'ll provide a full refund. For ongoing courses, refunds are available according to our refund policy terms.',
      },
      {
        question: 'Can I pause my subscription?',
        answer:
          'Yes, you can pause your subscription for up to 3 months if needed due to travel, illness, or other circumstances. Just contact our support team to arrange this.',
      },
      {
        question: 'Are there discounts for families?',
        answer:
          'Yes, we offer family discounts of up to 20% when multiple family members enroll. We also have special rates for group bookings and long-term commitments.',
      },
    ],
  },
]

export function getAllFaqs(): FaqItem[] {
  return faqCategories.flatMap((category) => category.questions)
}

import aries from './img/aries.png'
import leo from './img/leo.png'
import cancer from './img/cancer.png'
import gemini from './img/gemini.png'
import taurus from './img/taurus.png'
import virgo from './img/virgo.png'
import libra from './img/libra.png'
import scorpio from './img/scorpio.png'
import sagittarius from './img/sagittarius.png'
import capricorn from './img/capricorn.png'
import aquarius from './img/aquarius.png'
import pisces from './img/pisces.png'

const zodiacSigns = [
    { 
        name: "Aries",
        img : aries,
        introduction: "Get ready, as the old structures could collapse at any moment. Cheer up and take a step towards that new life project you desire so much.",
        Love: "If you have started a romantic relationship, try to be careful and leave obsession aside. If you don't change your attitude, this new person will quickly drift away.",
        wealth: "Put all your energy in, as that financial matter will require all your attention today. Be attentive, in case you need to make any moves.",
        welfare: "For once in your life, be consistent and stop making excuses to fully comply with that weight loss treatment you started.",
        start: { month: 3, day: 21 }, 
        end: { month: 4, day: 19 }, 
        horoscope: 'Horoscope reading for Aries',
        infoAstralChart: 'Your natal chart suggests a strong sense of individuality and a pioneering spirit. You\'re likely to be assertive, energetic, and enthusiastic about new beginnings. With Mars as your ruling planet, you possess a competitive edge and a drive to succeed. Your chart emphasizes independence and the courage to pursue your passions with vigor.'

    },
    { 
        name: "Taurus",
        img: taurus,
        introduction: "Understand that not everything always has a rational explanation for all the situations we face. Enjoy the good things and let yourself flow.",
        Love: "A period of reconciliations and romantic reunions is approaching. Know that you will need to let yourself be carried away by what you feel and enjoy the moment.",
        wealth: "After so many problems, you will be able to overcome all the work barriers that stand in front of you to achieve professional growth.",
        welfare: "Don't allow your energy to deplete quickly. Try to improve circulation and joints by doing gentle aerobic exercises.",
        start: { month: 4, day: 20 }, 
        end: { month: 5, day: 20 }, 
        horoscope: 'Horoscope reading for Taurus',
        infoAstralChart: 'In your natal chart, the influence of Venus bestows upon you a deep appreciation for beauty, comfort, and stability. You\'re likely to be reliable, patient, and practical in your approach to life. Your strong sense of loyalty and determination ensures that you steadily progress towards your goals. Security and material well-being are significant themes in your chart.'
    },
    { 
        name: "Gemini",
        img: gemini,
        introduction: "It would be good to remember that not everyone has their ideas as clear as you do. You will need to arm yourself with patience in the face of others' doubts.",
        Love: "Get ready, as you will be very irritable and in a bad mood today. Try not to argue with your soulmate because of your state. Take some distance.",
        wealth: "During this day, you will be very busy managing your personal finances. Avoid getting distressed and try to balance your expenses.",
        welfare: "Don't worry anymore, as thanks to your creative imagination, you will be able to combat the routine and boredom you've been experiencing for days.",
        start: { month: 5, day: 21 }, 
        end: { month: 6, day: 20 }, 
        horoscope: 'Horoscope reading for Gemini',
        infoAstralChart: 'With Mercury as your ruling planet, your natal chart suggests a keen intellect, curiosity, and versatility. You\'re likely to be sociable, communicative, and adaptable in various situations. Your chart highlights a love for learning, diversity, and intellectual stimulation. You thrive on exchanging ideas and exploring new perspectives.'
    },
    { 
        name: "Cancer",
        img: cancer,
        introduction: "Know that your intelligent abilities will finally lead you to find the exact solution to that problem that has been bothering you for days. Solve it today.",
        Love: "Stop being so concerned about whether the relationship you started recently with that person is meant to last a lifetime. Understand that you must let love flow.",
        wealth: "It's time to adjust to your budget. Try to be more rigorous in managing your finances. Avoid making unnecessary expenses that could strain your economy.",
        welfare: "When interacting with people, allow yourself to be more original in life. Try to abandon that formality that comes naturally to you.",
        start: { month: 6, day: 21 }, 
        end: { month: 7, day: 22 }, 
        horoscope: 'Horoscope reading for Cancer',
        infoAstralChart: 'Your natal chart emphasizes sensitivity, intuition, and emotional depth. You\'re likely to be nurturing, empathetic, and deeply connected to your family and roots. The influence of the Moon fosters a strong sense of intuition and psychic abilities. Your chart suggests a need for emotional security and a desire to create a nurturing home environment.'
    },
    { 
        name: "Leo",
        img: leo,
        introduction: "It will be crucial that before making a life-changing decision, you try to let go of impulsive reactions and meticulously analyze the situation.",
        Love: "It's time for you to accept that insecurity is your worst enemy. Learn to control jealousy; otherwise, your partner won't be willing to tolerate it.",
        wealth: "Understand that the key to managing your financial resources is to avoid unnecessary debts. It's time to be mindful of the expenses you make.",
        welfare: "Know that your body will be asking for a break. Listen to its demand and take some moments during the day to relax in whatever way you prefer.",
        start: { month: 7, day: 23 }, 
        end: { month: 8, day: 22 }, 
        horoscope: 'Horoscope reading for Leo',
        infoAstralChart: 'With the Sun as your ruling planet, your natal chart radiates confidence, creativity, and leadership. You\'re likely to be charismatic, ambitious, and enthusiastic about life. Your chart suggests a natural flair for drama, self-expression, and the spotlight. You thrive in environments where you can shine and receive recognition for your talents.'
    },
    { 
        name: "Virgo",
        img: virgo,
        introduction: "When setting goals, always make sure to define what you really want in life beforehand and desire it with all your strength. Focus and move forward.",
        Love: "Speak your mind and don't regret your actions. Know that the person by your side often wants to hear how much you love them and how much they mean to you.",
        wealth: "Don't waste any more time and seek advice from a professional. This way, you can clear many of the doubts you have about that financial issue.",
        welfare: "If you have to face a situation, stay relaxed. If you're not mentally prepared, the Moon in opposition could cause you to feel moody.",
        start: { month: 8, day: 23 }, 
        end: { month: 9, day: 22 }, 
        horoscope: 'Horoscope reading for Virgo',
        infoAstralChart: 'Your natal chart reflects a meticulous attention to detail, practicality, and analytical thinking. You\'re likely to be organized, diligent, and service-oriented in your approach to life. The influence of Mercury enhances your communication skills and problem-solving abilities. Your chart suggests a desire for perfection and a dedication to self-improvement.'
    },
    { 
        name: "Libra",
        img: libra,
        introduction: "If you act hastily and put your ideas into practice, no matter how absurd they may seem, you will achieve everything you set out to do today without much effort.",
        Love: "Start to value your soulmate a little more. It's time to analyze your feelings and let go of the negative outbursts you've been having lately.",
        wealth: "Today, there are high chances of winning in online gambling. Even if you're not accustomed to gambling, let your intuition guide you.",
        welfare: "Moderate your intake of meats and sweets. Don't postpone a change in your diet any longer, and if you can't do it alone, seek help from a nutritionist.",
        start: { month: 9, day: 23 }, 
        end: { month: 10, day: 22 }, 
        horoscope: 'Horoscope reading for Libra',
        infoAstralChart: 'In your natal chart, the influence of Venus bestows upon you a love for beauty, harmony, and social interactions. You\'re likely to be diplomatic, charming, and cooperative in your relationships. Your chart emphasizes a desire for balance, fairness, and peace. You thrive in environments where there is cooperation and mutual understanding.'
    },
    { 
        name: "Scorpio",
        img: scorpio,
        introduction: "Try to minimize your problems, as not everything is as dramatic as it seems. Be patient, and in no time, you'll be able to forget your worries.",
        Love: "A sudden infatuation can be deceptive. Handle it with caution so that your heart doesn't suffer later; otherwise, you may lose faith in love.",
        wealth: "When you decide and dedicate time to put your professional skills into practice, you will see that new sources of income will emerge. The decision is yours.",
        welfare: "Be aware and accept that you need to eat healthily no matter what. It's time to eliminate excess and anything that could harm your body.",
        start: { month: 10, day: 23 }, 
        end: { month: 11, day: 21 }, 
        horoscope: 'Horoscope reading for Scorpio',
        infoAstralChart: 'Your natal chart suggests intensity, depth, and a strong sense of intuition. You\'re likely to be passionate, determined, and fiercely loyal to those you care about. The influence of Pluto enhances your transformative abilities and your capacity for regeneration. Your chart suggests a desire for depth and authenticity in all aspects of life.'
    },
    { 
        name: "Sagittarius",
        img: sagittarius,
        introduction: "Move with caution in everything you have to undertake, as you could make mistakes even in simple matters. Act prudently.",
        Love: "Start to be more coherent when selecting a love interest. Understand that often a person's appearance is not the true reality.",
        wealth: "Know that the tendency to overspend could bring you short-term financial problems. Be careful with your purchases.",
        welfare: "Avoid denying yourself and start today with a balanced diet rich in fruits and vegetables. In a short time, you will begin to feel more agile and healthy.",
        start: { month: 11, day: 22 }, 
        end: { month: 12, day: 21 }, 
        horoscope: 'Horoscope reading for Sagittarius',
        infoAstralChart: 'With Jupiter as your ruling planet, your natal chart reflects optimism, adventure, and a thirst for knowledge. You\'re likely to be adventurous, philosophical, and open-minded in your approach to life. Your chart suggests a love for freedom, exploration, and new experiences. You thrive in environments where you can expand your horizons and seek truth and meaning.'
    },
    { 
        name: "Capricorn",
        img: capricorn,
        introduction: "Learn to manage the tendency to speak your mind regardless of what others think, as it can lead to complications.",
        Love: "Let go of jealousy and start trusting the person you love. Don't assume that everyone is the same; otherwise, you may never be able to maintain a relationship.",
        wealth: "Don't worry, as soon all your reasonable desires and ambitions will come to fruition smoothly within your professional world. Be prepared.",
        welfare: "Understand that life is not just about work. Allow yourself to have a space for pleasure and joy with all your loved ones. Enjoy the good times.",
        start: { month: 12, day: 22 }, 
        end: { month: 1, day: 19 }, 
        horoscope: 'Horoscope reading for Capricorn',
        infoAstralChart: 'Your natal chart emphasizes discipline, ambition, and a strong sense of responsibility. You\'re likely to be hardworking, practical, and determined to achieve your goals. The influence of Saturn instills a sense of structure and resilience in your character. Your chart suggests a desire for long-term success and a willingness to endure challenges in pursuit of your ambitions.'
    },
    { 
        name: "Aquarius",
        img: aquarius,
        introduction: "Thanks to your heightened intuition, you will find the right answer to help that person who has asked you for advice. Don't turn away and offer your assistance.",
        Love: "Your partner may seem somewhat distant. Avoid getting scared, as soon they will change that frivolous attitude and the relationship will return to normal.",
        wealth: "Don't waste the remaining free time of the day to organize your papers and outstanding accounts. Prevent your administration from becoming chaotic.",
        welfare: "You should opt for a more balanced diet. Try to gather information on the naturalism that interests you so much and apply it to your life as soon as possible.",
        start: { month: 1, day: 20 }, 
        end: { month: 2, day: 18 }, 
        horoscope: 'Horoscope reading for Aquarius',
        infoAstralChart: 'In your natal chart, the influence of Uranus bestows upon you originality, independence, and a humanitarian outlook. You\'re likely to be innovative, eccentric, and deeply concerned about social issues. Your chart suggests a love for freedom, equality, and progressive ideas. You thrive in environments where you can express your individuality and contribute to positive change.'
    },
    { 
        name: "Pisces",
        img: pisces,
        introduction: "Know that you could commit a great injustice if you continue to judge situations or people you don't know too harshly.",
        Love: "Avoid picking fights, as it's not the time for reassessments in the relationship. Understand that communication with your soulmate could become tense.",
        wealth: "Try to relax, as the lunar presence will favor you in business, finance, and work matters today. Make the most of the good energies.",
        welfare: "Unwind and choose a hobby or home activity that you enjoy greatly to distract yourself from the heavy routine you've been experiencing lately in your life.",
        start: { month: 2, day: 19 }, 
        end: { month: 3, day: 20 }, 
        horoscope: 'Horoscope reading for Pisces',
        infoAstralChart: 'Your natal chart reflects sensitivity, compassion, and a deep connection to the spiritual realm. You\'re likely to be imaginative, intuitive, and empathetic towards others. The influence of Neptune enhances your creativity and your capacity for empathy and healing. Your chart suggests a desire for transcendence and a longing for connection to something greater than yourself.'
    }
];

export default zodiacSigns;
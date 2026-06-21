import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Sprout, 
  Search, 
  ArrowUpRight, 
  X, 
  User, 
  Phone, 
  Globe,
  Briefcase,
  FileCheck,
  DollarSign,
  Compass
} from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

// Animated Counter component
const AnimatedCounter = ({ target, suffix = '', prefix = '', duration = 1200 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target, 10);
    if (isNaN(end)) {
      setCount(target);
      return;
    }
    
    const totalSteps = 50;
    const stepTime = duration / totalSteps;
    const increment = end / totalSteps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(increment * currentStep));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

// Original startups data extracted from incubatees details vj.xlsx
const STARTUPS_DATA = [
  {
    "id": 1,
    "startup_name": "JB enterprise",
    "ownername": "Jatin Soni",
    "description": "Nutmeals is built on the philosophy of “food as preventive pharmacy,” promoting nutrition as a foundation for healthier living. The brand aims to educate consumers about functional, wholesome and diverse food choices tailored to individual lifestyles and health needs. Through its concept of the “Tree of Nutritional Well-Being,” Nutmeals highlights the connection between health challenges, nutritional solutions andnatural food sources.\n\nIts product portfolio includes a wide range of nutrient-rich offerings such as nuts, seeds, dried fruits, millets, energy bars, healthy snacks, spreads, ethnic beverages and gifting options. Nutmeals also focuses on enhancing the functional benefits of foods through advanced and eco-friendly processing techniques at its modern small-scale facility.\n\nAcross the entire value chain, the brand emphasizes health, hygiene, careful sourcing and consistent quality. Ingredients are selected and graded based on origin, nutritional value andsustainable, non-polluting processes to ensure products that are both nutritious and environmentally responsible.",
    "startup_website": "nutmeals.com",
    "contact_no": "9924455776",
    "social_links": {
      "instagram": "https://www.instagram.com/nutmeals.in?igsh=MW4xeXMzdTZhcDhpZQ=="
    },
    "logo_initials": "JB",
    "category": "Agri & Lifestyle Enterpreneur",
    "subcategory": "",
    "image_url": ""
  },
  {
    "id": 2,
    "startup_name": "H-Motive",
    "ownername": "Gohil Nileshbhai R.",
    "description": "H-Motive is a Gujarat-based natural honey brand dedicated to providing 100% pure, raw, unfiltered and unheated honey products inspired by traditional and natural beekeeping practices. The company offers a wide range of specialty raw honey variants including Indian Bee Honey, Forest Honey, Aniseed Honey and Ajwain Honey, each known for its unique taste and health benefits such as boosting immunity, improving vitality, supporting digestion and promoting natural wellness. The brand emphasizes purity, natural processing and chemical-free production methods.\n\nFounded by Nilesh Gohil, H-MOTIVE was established with the vision of making truly pure honey accessible to consumers after observing the lack of authentic honey products in the market. \n\nThe company follows natural beekeeping and seasonal bee migration practices to produce raw honey while ensuring the safety and preservation of bees and natural ecosystems. Through its focus on health, sustainability and quality, H-MOTIVE aims to promote healthier lifestyles and awareness about natural honey products.",
    "startup_website": "",
    "contact_no": "7984850618",
    "social_links": {
      "instagram": "https://www.instagram.com/hmotive.honey?igsh=OGhpNTlhZGcwMXF3"
    },
    "logo_initials": "HM",
    "category": "Agri & Lifestyle Enterpreneur",
    "subcategory": "",
    "image_url": ""
  },
  {
    "id": 3,
    "startup_name": "Sattvanik honey",
    "ownername": "Hardik Godad",
    "description": "Sattvanik Honey is a premium honey brand based in Ahmedabad, Gujarat, founded by Hardik Godad (B.Sc. Agriculture) with a vision to provide pure, natural and ethically sourced raw honey directly from beekeepers and farms. Rooted in the principles of sustainability and natural wellness, Sattvanik Honey is committed to delivering honey in its most authentic and unprocessed form while preserving its natural nutrients, aroma and medicinal properties. \n\nWith a strong network of 300+ beekeepers across different regions, the brand ensures that every batch of honey is carefully harvested, hygienically processed and lab tested for quality and purity. Sattvanik Honey believes in maintaining traditional beekeeping values without excessive filtration or artificial processing, allowing consumers to experience the real taste and health benefits of raw honey straight from nature. The brand offers a diverse range of honey varieties including Wild Forest Honey, Fennel Honey, Lychee Honey, Ajwain Honey and Multiflora Honey, each known for its unique flavor profile and natural wellness benefits. \n\nRich in antioxidants, minerals and essential nutrients. Sattvanik Honey supports immunity, digestion, respiratory health, hydration, metabolism and overall well-being. Beyond retail products, Sattvanik Honey also provides private labeling, bulk supply, export support and brand-building solutions for businesses looking for trusted and high-quality honey sourcing. Their dedication to quality, sustainability and farmer collaboration makes them a reliable partner in the natural food and wellness industry. At Sattvanik Honey, every jar represents purity, trust and the sweet harmony of nature - bringing consumers closer to healthy and conscious living through 100% natural and raw honey.",
    "startup_website": "",
    "contact_no": "8160055896",
    "social_links": {},
    "logo_initials": "SH",
    "category": "Agri & Lifestyle Enterpreneur",
    "subcategory": "",
    "image_url": ""
  },
  {
    "id": 4,
    "startup_name": "Ambika",
    "ownername": "Falguni Bhatt",
    "description": "Ambika Corporation began its journey in 1967 as a manufacturer of engineering spare parts, building a strong reputation for quality, reliability, and customer satisfaction. Expanding its vision, the company launched its new venture, Ambica, in 2023 with a focus on providing 100% pure and natural products that promote healthy and sustainable living. \n\nAmbica offers a diverse range of natural products, including whole spices, spice masala powders, herbs, mushrooms, healthy drinks, essential oils, henna powder, hair packs, soapnuts, jackfruit value-added products, cocoa products, and various types of coffee powder. Committed to quality and authenticity, the brand aims to deliver nature's goodness to consumers while supporting a healthier lifestyle through carefully sourced and processed products.",
    "startup_website": "",
    "contact_no": "9375992311",
    "social_links": {},
    "logo_initials": "AM",
    "category": "Agri & Lifestyle Enterpreneur",
    "subcategory": "",
    "image_url": ""
  },
  {
    "id": 5,
    "startup_name": "Organic bites",
    "ownername": "Harsh Jethvani",
    "description": "Organic bites is a health and wellness-focused organic food brand dedicated to promoting clean, chemical-free, and sustainable living through natural and nutritious products. Founded with the vision of making healthy living accessible to every household, the brand offers a wide range of organic groceries, millets, healthy snacks, herbal wellness products, cold-pressed oils, cereals, spices, and natural personal care products. \n\nThe company works closely with farmers, rural communities, and social enterprises to support sustainable agriculture, ethical sourcing, and rural livelihood development. By combining traditional wisdom with value-added processing and quality-focused practices, Organic Bites aims to create products that are safe, authentic and naturally beneficial for everyday health. \n\nOrganic Bites emphasizes health, hygiene, and environmentally responsible practices across its entire value chain. The brand focuses on carefully selected ingredients, minimal processing and chemical-free food solutions that encourage conscious consumption and healthier lifestyles. With a strong commitment to wellness and community impact, Organic Bites continues to build trust as a reliable platform for natural and organic living.",
    "startup_website": "www.organicbitesindia.com",
    "contact_no": "9429776865",
    "social_links": {},
    "logo_initials": "OB",
    "category": "Agri & Lifestyle Enterpreneur",
    "subcategory": "",
    "image_url": ""
  },
  {
    "id": 6,
    "startup_name": "Krushimool",
    "ownername": "kevin Lungariya",
    "description": "Krushimool is a Gujarat-based natural food and agri-brand dedicated to reviving India’s traditional food culture through naturally grown, minimally processed, and region-specific agricultural products. The brand works directly with farmers to promote sustainable agriculture, indigenous crops, and healthy food practices while ensuring fair value for farming communities. Their product range includes traditional grains, pulses, roasted snacks, and naturally cultivated food products that combine nutrition, purity, and authentic taste. \n\nKrishiMool is also connected with SRISTI Khedut Haat for product sales and consumer outreach. Through this collaboration, the company generates approximately ₹20,000 in monthly sales from the SRISTI platform, contributing to its overall monthly business turnover of around ₹50,000 to ₹60,000. The partnership has helped KrishiMool reach health-conscious consumers, strengthen market access for natural products, and support the broader mission of sustainable farming and farmer-led entrepreneurship.",
    "startup_website": "www.krishimool.com",
    "contact_no": "7046380116",
    "social_links": {},
    "logo_initials": "KR",
    "category": "Agri & Lifestyle Enterpreneur",
    "subcategory": "",
    "image_url": ""
  },
  {
    "id": 7,
    "startup_name": "Ayurvidhan research and development",
    "ownername": "Kuldeep Sharma",
    "description": "Neti-Neti Toothpaste is a natural toothpaste made for people who prefer simple, plant based oral care products. It contains ingredients such as soapnut, hemp seed oil, clove extract and stevia leaf extract, which are commonly used for their cleansing and oral care properties. The product is vegan, cruelty free and free from many synthetic ingredients found in traditional toothpastes. \n\nThis brand focuses on providing a more natural approach to daily oral hygiene while supporting environmentally friendly and ethical practices. It is designed for consumers who are looking for alternatives to conventional toothpaste and who value clean and transparent ingredient lists. \n\nNeti-Neti aims to help maintain oral cleanliness, fresh breath and healthy gums through its plant based formulation. While the product promotes several oral health benefits, its effectiveness may vary from person to person. Overall, Neti-Neti Toothpaste is a modern, natural oral care option that reflects the growing demand for healthier, sustainable, and eco-conscious personal care products.",
    "startup_website": "netinetioralcare.mysopify.com",
    "contact_no": "6355209222",
    "social_links": {
      "instagram": "@Netineti_oralcare"
    },
    "logo_initials": "AR",
    "category": "Agri & Lifestyle Enterpreneur",
    "subcategory": "",
    "image_url": ""
  },
  {
    "id": 8,
    "startup_name": "Madhav",
    "ownername": "Saumya Yograjsingh Gohil",
    "description": "1st Nov. 2018 Products in market, (Natural juice and squash & Jam)\n\nMadhav Farm Fresh is a social media platform dedicated to promoting fresh farm products, natural food choices, and healthy living practices. The page highlights farm-fresh produce and agricultural products while encouraging consumers to adopt healthier and more sustainable food habits. \n\nThrough regular updates and community interaction, it aims to create awareness about the importance of natural and locally sourced foods. The platform also reflects a commitment to supporting agriculture-based livelihoods and strengthening the connection between farmers and consumers. Its content focuses on freshness, quality, nutrition, and trust, helping customers discover farm-based products that align with wellness-oriented lifestyles. The page serves as a digital space for sharing information, product updates, and promoting responsible food consumption.",
    "startup_website": "https://bhavnagarshops.com/index.php?route=product%2Fmanufacturer%2Finfo&manufacturer_id=16",
    "contact_no": "9662069460",
    "social_links": {
      "email": "madhavfresh@gmail.com"
    },
    "logo_initials": "MA",
    "category": "Agri & Lifestyle Enterpreneur",
    "subcategory": "",
    "image_url": ""
  },
  {
    "id": 9,
    "startup_name": "no company",
    "ownername": "Bharatbhai Nasit",
    "description": "1st April. 2019 He is a famer and he is supporting and actively work in the field of agriculture. His main interest is to preserve and distribute the traditional (Desi) seeds of pulses, grains, fruits and vegetables to different farmers.\n\nThe enterprise is focused on the preservation, multiplication, and distribution of traditional indigenous (desi) seeds to support sustainable and organic agriculture. Originating from grassroots efforts in rural Gujarat, the initiative was established to address the declining availability of traditional seed varieties and the growing dependence on genetically modified and hybrid seeds. \n\nThrough years of field-level engagement with farming communities, the venture has built a diverse collection of more than 200 varieties of traditional vegetable, grain, and medicinal plant seeds. The enterprise works closely with farmers to conserve agricultural biodiversity, promote organic cultivation practices, and improve long-term soil health. By creating awareness about the value of indigenous seeds and facilitating their distribution, the initiative aims to strengthen seed sovereignty, preserve traditional agricultural knowledge, and contribute to the production of healthier and more sustainable food systems.",
    "startup_website": "",
    "contact_no": "97142 27816, 94264 43341",
    "social_links": {
      "email": "Exiteaglestudio.ksd@gmail.com"
    },
    "logo_initials": "NC",
    "category": "Agri & Lifestyle Enterpreneur",
    "subcategory": "",
    "image_url": ""
  },
  {
    "id": 10,
    "startup_name": "Pushpam Foods",
    "ownername": "Depen Shah",
    "description": "The company is engaged in the manufacturing and processing of natural food and beverage products with a focus on quality, innovation, and value addition of agricultural produce. Through modern processing infrastructure and food-grade manufacturing practices, the company develops a range of fruit-based beverages, juices, concentrates, and other food products designed to meet evolving consumer demand for healthy and convenient nutrition solutions. \n\nThe company emphasizes product quality, sustainable sourcing, and efficient processing technologies to deliver safe and high-quality food products to the market. By combining agricultural resources with advanced manufacturing capabilities, the enterprise aims to create value across the food supply chain while promoting healthier beverage and food alternatives for consumers.",
    "startup_website": "Pushpam Foods 100% Organic Drumstick Pod Powder | Rich in Natural Iron, Calcium & Vitamin C | Supports Joint Health & Strong Bones | Moringa Vegetable Powder | Superfood Nutraceutical Supplement : Amazon.in: Health & Personal Care",
    "contact_no": "9727727077",
    "social_links": {},
    "logo_initials": "PF",
    "category": "Agri & Lifestyle Enterpreneur",
    "subcategory": "",
    "image_url": ""
  },
  {
    "id": 11,
    "startup_name": "Nisarg Organics",
    "ownername": "Yogesh Pandya",
    "description": "Nisarg Organics is a Gujarat-based natural wellness and organic products company committed to promoting healthier lifestyles through pure, natural and sustainably sourced products. Built on the vision of creating a “Healthy India,” the brand offers a wide range of organic supplements, spices, natural healthcare products, skincare, herbal products, honey, cow ghee, oils and wellness solutions designed to support holistic well-being. \n\nThe company works closely with trusted farmers, producers and natural farming communities to ensure authenticity, purity and consistent quality across its product range. By supporting natural and chemical-free farming practices, Nisarg Organic Farm emphasizes environmentally responsible agriculture, ethical sourcing and traditional wellness principles. \n\nNisarg Organic Farm follows hygienic processing methods and careful ingredient selection to deliver products that are nutritious, safe and naturally beneficial. The brand believes that food and wellness products should nourish the body while preserving nature, combining traditional knowledge with modern quality standards to build long-term consumer trust.",
    "startup_website": "Nisarg Organic Farm - Nature’s Way to a Healthier You",
    "contact_no": "9099715545",
    "social_links": {},
    "logo_initials": "NO",
    "category": "Agri & Lifestyle Enterpreneur",
    "subcategory": "",
    "image_url": ""
  },
  {
    "id": 12,
    "startup_name": "Trupt",
    "ownername": "Bhavin Ravaliya",
    "description": "B & B Natural offers a range of natural fruit-based beverages and value-added products made from fruits grown on its own farms. The product portfolio includes squashes and concentrates prepared from passion fruit, mango, guava, tamarind, and other locally grown fruits. These products are developed using natural ingredients to preserve the authentic taste, aroma, and nutritional value of the fruits. \n\nThe company is further expanding into ready-to-drink natural juices and beverages, designed to meet the preferences of modern consumers seeking healthier alternatives to conventional soft drinks and artificially flavored syrups. By focusing on natural ingredients, minimal processing, and high-quality fruit content, the products aim to deliver superior taste, nutrition, and a genuine farm-to-consumer experience.",
    "startup_website": "",
    "contact_no": "8128020760",
    "social_links": {},
    "logo_initials": "TR",
    "category": "Agri & Lifestyle Enterpreneur",
    "subcategory": "",
    "image_url": ""
  },
  {
    "id": 13,
    "startup_name": "Freni natural (SR Natural)",
    "ownername": "Rohit Patel",
    "description": "Freni Natural Pvt. Ltd. is an eco-friendlyeco-friendly innovation company dedicated to developing sustainable and nature-based wellness products. The company focuses on research, manufacturing, and promotion of bamboo and charcoal-based solutions for personal care, agriculture, home wellness and environmental sustainability. \n\nIts products are popularly marketed and recognized under the brand name SR Natural, which has gained trust among consumers for offering natural, safe and eco-conscious products. SR Natural provides a wide range of products including bamboo shampoo, bamboo extract, charcoal powder, air purifying bags, biochar, body wash, sprays, natural wellness products and agricultural solutions designed to improve everyday life naturally. \n\nThe brand combines traditional natural knowledge with scientific innovation and research collaborations with institutions such as Anand Agricultural University (AAU) and AIC-LMCP Foundation. By using bamboo, activated charcoal and bio-based ingredients, SR Natural promotes healthier living while reducing dependency on harmful chemicals and synthetic products. Frei Natural believes in creating environmentally responsible products that are beneficial for people, agriculture and the planet. Through the SR Natural brand, the company continues to promote sustainable living, natural wellness and eco-friendly innovation for modern lifestyles.",
    "startup_website": "",
    "contact_no": "9904858882",
    "social_links": {},
    "logo_initials": "FN",
    "category": "Agri & Lifestyle Enterpreneur",
    "subcategory": "",
    "image_url": ""
  },
  {
    "id": 14,
    "startup_name": "Pepper Theory",
    "ownername": "Manshi Patel",
    "description": "Pepper Theory offers fresh, naturally grown microgreens and wheatgrass packed with essential nutrients and vibrant Flavors. Microgreens are harvested at an early stage of growth when their nutritional value is at its peak, making them rich in vitamins A, B Complex, C, E, and K along with minerals like calcium, magnesium, iron, and antioxidants. These nutrient-dense greens can be easily added to salads, sandwiches, smoothies, raita, chutneys, wraps, and other daily meals. \n\nThe brand offers a wide variety of premium microgreens including broccoli, sunflower, kale, beetroot, radish, peas, spinach, mustard, chia, alfalfa, and more. Pepper Theory also provides fresh wheatgrass harvested within 7–10 days of growth, valued for its chlorophyll, amino acids, and antioxidant-rich profile that supports immunity, digestion, detoxification, and overall wellness. \n\nFocused on freshness, quality, and healthy living, Pepper Theory provides customized microgreen boxes suitable for fitness enthusiasts, health-conscious consumers, restaurants, and everyday nutrition needs",
    "startup_website": "",
    "contact_no": "9898977847",
    "social_links": {},
    "logo_initials": "PT",
    "category": "Agri & Lifestyle Enterpreneur",
    "subcategory": "",
    "image_url": ""
  },
  {
    "id": 15,
    "startup_name": "Rumra",
    "ownername": "Mohan Vadhavana",
    "description": "Rumra is a natural food and wellness brand dedicated to reviving ancient Vedic food traditions through stone-ground atta and cold-pressed oils made without heat, chemicals, or artificial processing. Rooted in the philosophy of preserving nutrition in its purest form, the brand follows traditional slow-processing methods that retain natural fiber, nutrients and essential oils exactly as nature intended. \n\nAs Ahmedabad’s first Vedic stone chukka atta facility, Rumra uses slow-moving stone wheels and low-temperature grinding techniques to produce acta without heat damage, ensuring better nutrition, taste and authenticity. Its cold-pressed oils are crafted with the same commitment to purity, using chemical-free and preservative-free methods that maintain the natural goodness of the ingredients. \n\nDriven by a vision to bring back mindful and wholesome eating habits, Rumba combines traditional wisdom with modern hygienic practices to create healthy, honest and trustworthy food products. The brand emphasizes purity, sustainability and conscious living while offering consumers natural alternatives free from shortcuts, additives and compromise.",
    "startup_website": "rumra.in",
    "contact_no": "9924365551",
    "social_links": {
      "instagram": "https://www.instagram.com/rumra_ancient?igsh=MXd3aWE4NGY5MnZqdw=="
    },
    "logo_initials": "RU",
    "category": "Agri & Lifestyle Enterpreneur",
    "subcategory": "",
    "image_url": ""
  },
  {
    "id": 16,
    "startup_name": "Chandramauli Ayurveda",
    "ownername": "Mehta Dhruv P.",
    "description": "Chandramauli Ayurveda is an Ayurvedic wellness brand dedicated to preserving and promoting the rich heritage of traditional Indian healing practices. Drawing inspiration from ancient Ayurvedic texts and time-tested formulations, the brand develops natural products using carefully selected herbs and traditional preparation methods. Its focus is on delivering authentic, high-quality Ayurvedic solutions that support holistic health and well-being.\n\nThe brand offers a range of Ayurvedic products, including herbal hair care formulations such as Nili Bhringaraj Hair Oil, prepared using traditional techniques and natural ingredients. With an emphasis on purity, quality, and sustainability, Chandramauli Ayurveda strives to provide effective herbal products that combine the wisdom of Ayurveda with the needs of modern consumers, helping them embrace a healthier and more natural lifestyle.",
    "startup_website": "",
    "contact_no": "8238982382",
    "social_links": {},
    "logo_initials": "CA",
    "category": "BioNest",
    "subcategory": "Active",
    "image_url": ""
  },
  {
    "id": 17,
    "startup_name": "Affinito",
    "ownername": "Nishant Patel",
    "description": "Affinito is a premium freeze-dried food brand based in Anand, Gujarat, dedicated to delivering high-quality, nutritious andinnovative food products. The company specializes in advanced freeze-drying technology that preserves the natural taste, aroma, texture andnutritional value of fruits, vegetables, herbs andother food ingredients. With a strong focus on quality, sustainability and food innovation, Affinito provides a diversified range of freeze-dried solutions for retail, industrial andcommercial applications.\n\nTheir products are carefully processed to ensure longer shelf life without compromising freshness or nutritional benefits, making them ideal for modern healthy lifestyles and food industries. Affinito combines modern food processing techniques with a commitment to excellence, hygiene andcustomer satisfaction. The brand aims to promote convenient, healthy andpreservative-free food alternatives while supporting evolving consumer needs in India and global markets.",
    "startup_website": "https://affinito.in/",
    "contact_no": "9624365544",
    "social_links": {},
    "logo_initials": "AF",
    "category": "BioNest",
    "subcategory": "Active",
    "image_url": ""
  },
  {
    "id": 18,
    "startup_name": "INDIVAAN",
    "ownername": "Nirav Panchal",
    "description": "Indivaan is a sustainable lifestyle and fashion brand inspired by the rich textile heritage of Gujarat. Rooted in the philosophy of conscious living, Indivaan blends traditional craftsmanship with contemporary design to create timeless, eco-friendly products that celebrate culture, creativity and sustainability.\n\nAt Indivaan, every creation reflects a commitment to empowering women artisans, preserving indigenous crafts andpromoting ethical fashion practices. Using organic fabrics, handcrafted techniques and upcycled materials, the brand aims to reduce environmental impact while supporting local communities and rural livelihoods. Our collections are thoughtfully designed for people who value authenticity, sustainability and meaningful craftsmanship. From handmade textiles to eco-conscious lifestyle products, Indivaan represents a journey where tradition meets innovation and fashion becomes a force for positive change.",
    "startup_website": "www.indivaan.com",
    "contact_no": "9825626387",
    "social_links": {},
    "logo_initials": "IN",
    "category": "BioNest",
    "subcategory": "Active",
    "image_url": ""
  },
  {
    "id": 19,
    "startup_name": "self entrepreneur",
    "ownername": "Gopalsingh Suratiya",
    "description": "1st April. 2019 He has developed the Medicated soaps and shampoos without using chemicals\n\nThe enterprise is focused on developing traditional Ayurvedic and nature-based wellness products inspired by rural knowledge and practical problem-solving. Originating from decades of farming experience, the venture has developed a range of products including herbal hair care formulations, pain relief oils, and eco-friendly products made from natural materials. The innovations are based on locally available resources and traditional medicinal practices aimed at providing affordable solutions for everyday health and wellness needs.\n\nDriven by a passion for experimentation and community service, the enterprise combines indigenous knowledge with hands-on innovation to create products that address common concerns such as hair care, pain management, and sustainable living. In addition to herbal wellness products, the venture has also developed mechanized methods for producing eco-friendly products from cow dung, promoting rural entrepreneurship and environmentally sustainable practices.",
    "startup_website": "",
    "contact_no": "9824949291, 9904480545",
    "social_links": {},
    "logo_initials": "SE",
    "category": "BioNest",
    "subcategory": "Active",
    "image_url": ""
  },
  {
    "id": 20,
    "startup_name": "GRASSROOTS Innovators-SRISTI",
    "ownername": "Ramaji Bhimaji Parmar",
    "description": "1st April. 2019 He is a farmer but he has expertise in the field of aryuveda. He is making the ayurvedic products for humans and animals for different skin diseases.\n\nThe company is developing traditional herbal healthcare products based on indigenous medicinal knowledge passed down through generations and refined through years of practical application. Originating from rural Gujarat, the venture utilizes knowledge of over 100 medicinal plants to formulate natural remedies for a range of human and animal health conditions. The formulations are developed using locally available medicinal herbs and are inspired by traditional healing practices that have been preserved within the community for decades.\n\nOne of the company's key products is Zematic, a herbal topical formulation developed for the management of eczema, psoriasis, and fungal skin infections. The product combines extracts from medicinal plants such as neem (Azadirachta indica), tulsi (Ocimum sanctum), curry leaf (Murraya koenigii), palash (Butea monosperma), and Luffa echinata in a herbal cream base. By combining traditional knowledge with product standardization and commercialization, the venture aims to provide affordable, plant-based healthcare solutions while preserving valuable grassroots medicinal knowledge.",
    "startup_website": "",
    "contact_no": "9925971043",
    "social_links": {
      "email": "ramajibhemajip@gmail.com"
    },
    "logo_initials": "GI",
    "category": "BioNest",
    "subcategory": "Active",
    "image_url": ""
  },
  {
    "id": 21,
    "startup_name": "Kaps Care",
    "ownername": "Pratibha Mathvara",
    "description": "Kaps Care is a healthcare and wellness company based in Ahmedabad, Gujarat, dedicated to providing high-quality personal care, cosmetic, skincare, hygiene, and wellness products. The company focuses on creating safe, effective, and reliable solutions by combining scientific knowledge, quality ingredients, and modern manufacturing practices.\n\nDriven by a commitment to innovation and customer well-being, Kaps Care develops formulations that support healthier lifestyles while maintaining high standards of purity, consistency, and product quality. The company follows systematic sourcing, testing, and hygienic production processes to ensure dependable products that meet evolving consumer needs. With a strong emphasis on trust, integrity, and continuous improvement, Kaps Care aims to deliver practical and accessible wellness solutions that balance healthcare expertise with responsible manufacturing. As a growing brand in the wellness and personal care industry, the company continues to strengthen its presence through quality-driven products, ethical practices, and customer-centric values.",
    "startup_website": "www.kapscare.com",
    "contact_no": "8160030897",
    "social_links": {
      "instagram": "https://www.instagram.com/kapscareofficial?igsh=MW9xcnMza2J1OWQxeA%3D%3D&utm_source=qr"
    },
    "logo_initials": "KC",
    "category": "BioNest",
    "subcategory": "Active",
    "image_url": ""
  },
  {
    "id": 22,
    "startup_name": "Suncoco",
    "ownername": "Akshar Visani",
    "description": "Suncoco is a premium cocoa and wellness-focused food brand dedicated to creating clean, honest, and nourishing chocolate experiences using real cocoa and natural ingredients. The brand focuses on delivering rich, flavorful, and healthier alternatives to conventional chocolate products by avoiding artificial additives, preservatives, palm oil, and refined sugar in its formulations. Its product range includes hot chocolate mixes, cocoa spreads, coconut sugar, cacao nibs, cocoa butter, and other cocoa-based wellness products designed for conscious consumers.\n\nWhat makes Suncoco distinctive is its strong commitment to local sourcing and sustainable practices. Instead of importing cocoa to reduce costs, the company sources cocoa directly from farms in Idukki, Kerala, supporting Indian farmers and sustainable agriculture. By working closely with local farming communities, Suncoco ensures better quality ingredients while contributing to farmer livelihoods and ethical supply chains.\n\nThe brand emphasizes clean-label nutrition with minimal ingredients and higher cocoa concentration compared to many conventional products. Suncoco combines taste, nutrition, and transparency to create products that are both indulgent and mindful of health. Its philosophy goes beyond chocolate, promoting conscious consumption, authenticity, and environmentally responsible food choices.",
    "startup_website": "https://www.suncoco.in",
    "contact_no": "9316199321",
    "social_links": {
      "instagram": "SUNCOCO (@suncocoindia) • Instagram photos and videos"
    },
    "logo_initials": "SU",
    "category": "BioNest",
    "subcategory": "Active",
    "image_url": ""
  },
  {
    "id": 23,
    "startup_name": "Samrudhdhyog Venture - AAYUVEDA",
    "ownername": "Harsita hemani and Yash Hemani",
    "description": "AAYUVEDA is an India-based Ayurveda-inspired food and wellness brand committed to reviving traditional Indian wellness through clean-label, natural, and thoughtfully crafted products. The brand offers a diverse range of products including natural honey, amla-based products, traditional snacks, chikki, pickles, wellness treats, and eco-friendly jute bags, blending authentic recipes and Ayurvedic principles with the evolving needs of modern consumers.\n\nDriven by the growing demand for preventive wellness, sustainable living, and ingredient-conscious food choices, Aayu Veda focuses on creating wholesome alternatives that preserve traditional taste, nutrition, and cultural authenticity. The brand is also associated with SRISTI Khedut Haat, a platform promoting grassroots innovation, sustainable agriculture, and rural entrepreneurship. Through this collaboration, Aayu Veda generates approximately 25-30% of its monthly sales via the SRISTI ecosystem, contributing to an overall monthly turnover of nearly ₹3 lakhs. The collaboration has also played a significant role in strengthening consumer outreach and enhancing market visibility for the brand within the natural wellness and traditional food segment.",
    "startup_website": "",
    "contact_no": "9426436482, 9428805972",
    "social_links": {},
    "logo_initials": "SV",
    "category": "BioNest",
    "subcategory": "Active",
    "image_url": ""
  },
  {
    "id": 24,
    "startup_name": "AP Biologicals",
    "ownername": "Priyanka patel",
    "description": "AP Biologicals is a sustainable agriculture company dedicated to providing ecofriendly microbial solutions that support healthy farming and environmentally responsible crop production. With a strong commitment to natural and sustainable agriculture, AP Biologicals develops innovative biological products that help farmers improve crop productivity while protecting soil health, biodiversity and the environment. The company specializes in beneficial microorganisms and natural agricultural inputs that reduce dependency on harmful chemical fertilizers and pesticides. By using nature-based solutions, AP Biologicals promotes safer farming practices that enhance plant growth, strengthen crop resilience, improve soil fertility and support long-term agricultural sustainability.\n\nAP Biologicals works towards creating a healthier ecosystem by utilizing beneficial microbes and natural enemies to control pests and plant diseases. These ecofriendly biological solutions help minimize chemical residues in food, reduce pest resistance and contribute to safer and more sustainable food production systems. With a well-equipped Good Practice Laboratory and advanced manufacturing facilities, AP Biologicals ensures the large-scale production of high-quality microbial products that meet modern agricultural standards. The company is committed to research, innovation and quality assurance to deliver reliable solutions for farmers and agribusinesses.\n\nOur Product Range\nBio-Fertilizers - Sustainable solutions for Nitrogen (N), Phosphorus (P), Potassium (K), Zinc (Zn) and other micronutrients.\nBio-Fungicides - Effective control solutions for soil-borne and air-borne fungal diseases.\nBio-Insecticides - Natural protection against sucking pests, soil pests and caterpillars.\nBio-Nematicides - Ecofriendly solutions for nematode management.\nBio-Miticide - Biological control solutions for mites.\nBio-Mosquito Control - Natural microbial solutions for mosquito control.\nOrganic Manure - Bio-compost and decomposer bacterial consortia for improving soil health and organic matter.\n\nAP Biologicals believes in harnessing the power of nature to make agriculture healthier, safer and more productive for farmers, consumers and future generations.",
    "startup_website": "",
    "contact_no": "8454015211",
    "social_links": {},
    "logo_initials": "AP",
    "category": "BioNest",
    "subcategory": "Active",
    "image_url": ""
  },
  {
    "id": 25,
    "startup_name": "Vaishali Hair Treatment",
    "ownername": "Vaishali Mehta",
    "description": "26th Nov. 2018 Selling home made herbal soaps, oils and herbal hair dyes (Word of mouth marketing) Exit\n\nHerbals by Vaishali is a natural hair and skin care brand focused on providing herbal and chemical-free wellness solutions through traditional knowledge and natural ingredients. Founded by Vaishali, the brand emphasizes holistic beauty care by offering products designed to nourish, strengthen, and revitalize hair and skin using nature-based formulations.\n\nThe platform highlights a commitment to safe, personalized, and wellness-oriented care for everyday beauty needs. The brand offers a range of herbal products including hair packs, hair oils, soaps, and face care solutions aimed at addressing common hair and skin concerns naturally. Through customer-focused services and herbal formulations, Herbals by Vaishali promotes healthy living, natural beauty, and confidence while encouraging the use of traditional herbal care practices in modern lifestyles.",
    "startup_website": "https://herbalsbyvaishali.netlify.app/",
    "contact_no": "",
    "social_links": {},
    "logo_initials": "VH",
    "category": "BioNest",
    "subcategory": "Active",
    "image_url": ""
  },
  {
    "id": 26,
    "startup_name": "KLOAH",
    "ownername": "Malvika Rav",
    "description": "KLOAH is a wellness and natural health brand focused on creating clean, plant-based and science-backed products for holistic living. Inspired by the principles of Ayurveda and modern clinical research, Kloah offers premium wellness products such as herbal tonics, Sea Buckthorn supplements and nutraceutical formulations designed to support immunity, digestion, energy, sleep and overall well-being.\n\nThe brand emphasizes authentic sourcing, analytical testing and chemical-free formulations, promoting a lifestyle built on trust, purity and conscious living. Kloah is also associated with SRISTI Khedut Haat for product sales and customer outreach. Through this collaboration, the company generates approximately ₹32,000 in monthly sales from the SRISTI platform, contributing to its overall monthly business turnover of around ₹60,000. The partnership has helped Kloah connect with health-conscious consumers, strengthen awareness about natural wellness products and support the broader mission of sustainable living and farmer-linked entrepreneurship.",
    "startup_website": "www.kloah.in",
    "contact_no": "8980028941",
    "social_links": {
      "instagram": "https://www.instagram.com/kloah.in?igsh=MTkwcmlzcWxiYndmMQ=="
    },
    "logo_initials": "KL",
    "category": "BioNest",
    "subcategory": "Active",
    "image_url": ""
  },
  {
    "id": 27,
    "startup_name": "Prachin Jadibutti",
    "ownername": "Aneri Shah",
    "description": "Prachin Jadibuti is a wellness-focused herbal brand committed to reviving and promoting the ancient knowledge of Ayurveda, traditional herbs and natural healing practices. Rooted in India’s rich medicinal heritage, the brand offers authentic herbal and Ayurvedic products designed to support a healthier, more balanced and sustainable lifestyle. With a deep respect for traditional wisdom, Prachin Jadibuti carefully develops products using natural ingredients, time-tested formulations and holistic wellness principles.\n\nThe brand focuses on providing chemical-free and nature-based alternatives that help improve overall health, immunity and daily well-being while encouraging people to reconnect with the healing power of herbs and natural remedies. Prachin Jadibuti believes that true wellness comes from harmony between nature and human life. By combining traditional Ayurvedic knowledge with modern quality standards, the brand ensures purity, effectiveness andtrust in every product. Their commitment extends beyond wellness by supporting sustainable practices, promoting awareness about herbal living and preserving India’s invaluable herbal traditions for future generations. Through its diverse range of herbal wellness products, Prachin Jadibuti continues to inspire individuals and families to adopt healthier, eco-friendly and naturally enriched lifestyles.",
    "startup_website": "www.prachinjadibuti.in",
    "contact_no": "9023794032",
    "social_links": {},
    "logo_initials": "PJ",
    "category": "BioNest",
    "subcategory": "Active",
    "image_url": ""
  },
  {
    "id": 28,
    "startup_name": "Eco Drape",
    "ownername": "Shubham Chawla",
    "description": "Eco Drape is a sustainable and eco-friendly brand focused on promoting environmentally conscious products and responsible living practices. The company emphasizes the use of natural, reusable and sustainable alternatives that help reduce environmental impact while encouraging healthier and greener consumer choices.\n\nThrough its innovative product range and commitment to sustainability, EcoDrape aims to create awareness about eco-friendly living and support a more sustainable future. EcoDrape is also associated with Sristi Khedive Heat for product sales and customer outreach. Through this collaboration, the company generates approximately ₹25,000 to ₹30,000 in monthly sales from the Sristi platform, contributing to its overall monthly business turnover of around ₹50,000 to ₹1,00,000. This partnership has helped EcoDrape expand its reach among conscious consumers, strengthen awareness about sustainable products and support the broader mission of eco-friendly entrepreneurship.",
    "startup_website": "www.theecodrape.com",
    "contact_no": "7778801303",
    "social_links": {
      "instagram": "https://www.instagram.com/ecodrape/"
    },
    "logo_initials": "ED",
    "category": "BioNest",
    "subcategory": "Active",
    "image_url": ""
  },
  {
    "id": 29,
    "startup_name": "PIANTA Blossoms LLP",
    "ownername": "Jaini Shah",
    "description": "Pinata Blossoms is a nature-inspired wellness and lifestyle brand focused on creating plant-based, sustainable and thoughtfully crafted products. Rooted in the philosophy of conscious living, the brand emphasizes quality, natural ingredients and environmentally responsible practices to promote healthier and more mindful lifestyles.\n\nPinata Blossoms combines wellness, creativity, and sustainability through products that reflect purity, simplicity, and everyday well-being. The brand values ethical sourcing, clean production practices, and customer trust while aiming to deliver products that are both functional and aesthetically appealing. With a growing presence in the wellness and lifestyle space, Pianta Blossoms represents a modern approach to natural living by blending innovation, sustainability and a deep connection with nature.",
    "startup_website": "www.pianta.in",
    "contact_no": "9773448634",
    "social_links": {
      "instagram": "https://www.instagram.com/pianta_blossoms?igsh=amZoMzJxOHRmOHA3"
    },
    "logo_initials": "PB",
    "category": "BioNest",
    "subcategory": "Active",
    "image_url": ""
  },
  {
    "id": 30,
    "startup_name": "Gauneeti",
    "ownername": "Shrikant Malde",
    "description": "Gauneeti is a Gi cow-based wellness and dairy enterprise focused on promoting healthy, natural and sustainable living through ethically produced A2 dairy and organic products. Founded with a vision to revive traditional Indian farming values, the brand offers Gir Cow A2 Milk, Bilona Ghee, Panchgavya products, healthy snacks and organic groceries made with a strong commitment to purity, nutrition and sustainability.\n\nGauNeeti emphasizes cruelty-free farming, hygienic processing and environmentally responsible practices while supporting rural communities and conscious consumption. By combining traditional wisdom with modern management practices, the brand aims to create trustworthy wellness products that promote healthier lifestyles and ethical living. The company follows a farm-to-home approach to ensure freshness, transparency and consistent quality across its product range. With a strong focus on animal care, sustainable agriculture and customer well-being, GauNeeti continues to build a community centered around natural nutrition, wellness and responsible living.",
    "startup_website": "Buy Best A2 Milk and A2 Ghee in Ahmedabad - GauNeeti Organics",
    "contact_no": "9725388388",
    "social_links": {
      "email": "hello@gauneeti.in"
    },
    "logo_initials": "GA",
    "category": "BioNest",
    "subcategory": "Active",
    "image_url": ""
  },
  {
    "id": 31,
    "startup_name": "Colostrum",
    "ownername": "Dr. Priyanka Sharma",
    "description": "Colostrum is a wellness-focused brand dedicated to promoting natural health and preventive healthcare through innovative and science-based products. The company focuses on providing high-quality wellness solutions designed to support immunity, overall health and healthy lifestyles. With an emphasis on purity, research and sustainable practices, Radiom aims to create awareness about holistic well-being and encourage consumers to adopt healthier daily habits through trusted natural products.\n\nRadio is also associated with Sristi Khedive Heat for product sales and consumer outreach. Through this collaboration, the company generates approximately ₹28,000 in monthly sales from the Sristi platform, helping the brand connect with health-conscious consumers and expand its reach within the natural and sustainable products market. The partnership supports the broader mission of promoting farmer-linked entrepreneurship, wellness awareness and community-driven sustainable businesses. By combining innovation with natural wellness principles, Radio is building trust among consumers who seek healthier and sustainable alternatives in their daily lives. The company’s growing presence through community-based platforms like Sristi Khedive Heat reflects the increasing demand for wellness-oriented products and the importance of collaborative ecosystems that support responsible businesses and conscious consumer choices.",
    "startup_website": "www.radiom.in",
    "contact_no": "7990898260",
    "social_links": {},
    "logo_initials": "CO",
    "category": "BioNest",
    "subcategory": "Active",
    "image_url": ""
  },
  {
    "id": 32,
    "startup_name": "Aayurprabha",
    "ownername": "Kalgi Shah",
    "description": "Aayurprabha is an Ayurvedic cosmetic brand founded with a vision to provide organic, natural, and authentic personal care products. Inspired by a deep understanding of Ayurveda and industry experience, the brand was established to address the growing demand for safer cosmetic alternatives free from harmful chemicals.\n\nAayurprabha focuses on creating products that align with traditional Ayurvedic principles while meeting modern consumer needs. The brand offers a range of Ayurvedic cosmetic products that are free from parabens, SLS, SALES, and artificial colors. Committed to quality, purity, and authenticity, Aayurprabha aims to deliver natural wellness and beauty solutions directly to customers, promoting healthier skin and hair care through trusted Ayurvedic formulations.",
    "startup_website": "",
    "contact_no": "9687615812",
    "social_links": {},
    "logo_initials": "AA",
    "category": "BioNest",
    "subcategory": "Active",
    "image_url": ""
  },
  {
    "id": 33,
    "startup_name": "Dronagiri Herbal",
    "ownername": "Sarita Modha",
    "description": "Dronagiri Herbal is a natural wellness brand rooted in the principles of Ayurveda, offering a range of herbal hair care and skin care products. The brand was established with the vision of providing safe, effective, and nature-based solutions for everyday personal care needs.\n\nDrawing inspiration from traditional Ayurvedic wisdom, Dronagiri Herbal develops formulations using carefully selected herbs and botanical ingredients to promote healthy living. Focused on purity, quality, and customer well-being, Dronagiri Herbal aims to deliver products that support healthy hair, radiant skin, and overall wellness without relying on harsh chemicals. By blending time-honored Ayurvedic practices with modern production standards, the brand strives to make authentic herbal care accessible to consumers seeking natural and sustainable lifestyle choices.",
    "startup_website": "",
    "contact_no": "9429029840",
    "social_links": {},
    "logo_initials": "DH",
    "category": "BioNest",
    "subcategory": "Active",
    "image_url": ""
  },
  {
    "id": 34,
    "startup_name": "Rusi Herbal Ayurveda",
    "ownername": "Rusipal Prajapati",
    "description": "Rishi Herbal Ayurveda, Village Deroli Jat, District Mahendragarh (Haryana) Rishi Herbal Ayurveda is a dedicated Ayurvedic and herbal enterprise engaged in the preparation of a variety of health-promoting products based on natural herbs and traditional Ayurvedic knowledge. The organization aims to provide people with natural and safe alternatives for maintaining and improving their health. The enterprise specializes in producing juice and powder made from Indrayan fruit, which is traditionally considered beneficial for digestive health and various stomach-related issues.\n\nIn addition, special Ayurvedic powders for common digestive and gastric problems are also prepared. At Rishi Herbal Ayurveda, Sweet Tulsi (Stevia) is cultivated and products such as extracts, powder and dried leaves are manufactured from it. Sweet Tulsi is recognized as an excellent natural source of sweetness and is widely used by health-conscious individuals. The organization also prepares Ayurvedic medicines for conditions such as piles (hemorrhoids), diabetes (high blood sugar) and kidney stones. All products are manufactured with a strong emphasis on quality, purity and adherence to traditional Ayurvedic principles. Rishi Herbal Ayurveda is committed to improving public health through natural therapies and herbal products while promoting the rich heritage of Ayurveda. The organization offers a wide range of herbal products at reasonable prices, supporting a healthier and more natural lifestyle.",
    "startup_website": "",
    "contact_no": "9416151515",
    "social_links": {},
    "logo_initials": "RH",
    "category": "BioNest",
    "subcategory": "Active",
    "image_url": ""
  },
  {
    "id": 35,
    "startup_name": "Dhruvika Natural",
    "ownername": "Hansaben Rathva",
    "description": "Dhruvika Naturals is a grassroots enterprise founded by Hansaben Rathva, a rural entrepreneur from a small village in Gujarat. Her journey with Sristi began during the 53rd Shodhyatra, where her innovative use of traditional knowledge and local biodiversity was recognized. Inspired by the medicinal and skin-friendly properties of Kesuda (Flame of the Forest) flowers, Hansaben developed a natural soap that combines traditional wisdom with sustainable production practices.\n\nThe enterprise focuses on creating natural and eco-friendly personal care products using locally sourced ingredients. Through her dedication and entrepreneurial spirit, Hansaben has transformed a traditional resource into a value-added product that promotes both wellness and environmental responsibility. Her work reflects the potential of rural innovation in creating sustainable livelihood opportunities while preserving indigenous knowledge. Today, Dhruvika Naturals is supported by Sristi through market access, promotion, and business development initiatives. This collaboration aims to strengthen the enterprise's reach and sustainability, enabling Hansaben to connect with wider markets while continuing to inspire other rural innovators and women entrepreneurs.",
    "startup_website": "",
    "contact_no": "9016013181",
    "social_links": {},
    "logo_initials": "DN",
    "category": "BioNest",
    "subcategory": "Active",
    "image_url": ""
  },
  {
    "id": 36,
    "startup_name": "Barley Water",
    "ownername": "Ashok Upadhyay",
    "description": "Barley is a wellness-focused social media platform that shares content related to healthy living, barley-based nutrition, natural health awareness, and lifestyle improvement. The page appears to promote wellness-oriented products and health education aimed at encouraging a balanced and health-conscious lifestyle. Content includes product information, health tips, motivational posts, and community engagement around natural nutrition and everyday wellness.",
    "startup_website": "",
    "contact_no": "9825051457",
    "social_links": {},
    "logo_initials": "BW",
    "category": "Food and beverages",
    "subcategory": "Exit",
    "image_url": ""
  },
  {
    "id": 37,
    "startup_name": "Brooks and Blooms",
    "ownername": "Arjun Thakkar",
    "description": "Brook and Blooms appears to represent a sustainability-focused initiative and eco-conscious brand dedicated to transforming temple flower waste into meaningful and environmentally friendly products. Based in Ahmedabad, the initiative promotes environmental responsibility through innovative recycling practices while supporting social impact and sustainable living. The platform shares updates related to natural products, sustainability awareness, community initiatives, and eco-friendly innovations designed to reduce floral waste pollution. It also highlights efforts toward employment generation and responsible resource utilization, encouraging people to adopt greener practices and support environmentally conscious products and lifestyles.",
    "startup_website": "",
    "contact_no": "8980200305",
    "social_links": {},
    "logo_initials": "BB",
    "category": "Environmental science",
    "subcategory": "Exit",
    "image_url": ""
  },
  {
    "id": 38,
    "startup_name": "Amhidda Care",
    "ownername": "Hiral Parikh",
    "description": "Amhidda Care is a personal care brand dedicated to offering high-quality hair care, skin care, and body care products made with carefully selected ingredients. The brand focuses on providing effective daily care solutions that help maintain healthy skin, strong hair, and overall personal wellness. Its product range includes hair oils, shampoos, face washes, soaps, and other self-care essentials suitable for everyday use. With a commitment to quality and customer satisfaction, Amhidda Care combines traditional wellness principles with modern product development. The brand aims to make reliable and affordable personal care products accessible to consumers while promoting a healthy and confident lifestyle through its diverse range of beauty and wellness solutions.",
    "startup_website": "https://amhiddacare.com/",
    "contact_no": "9427806304, 9925017561",
    "social_links": {},
    "logo_initials": "AC",
    "category": "Herbal beauty products",
    "subcategory": "Exit",
    "image_url": ""
  },
  {
    "id": 39,
    "startup_name": "Algallio Biotech",
    "ownername": "Amee Patel",
    "description": "Algallio Biotech Pvt. Ltd. is a biotechnology-based company focused on developing innovative nutritional and wellness products derived from microalgae, particularly Spirulina. Established with the vision of addressing nutritional deficiencies through sustainable and natural solutions, the company offers a range of health-focused food and beverage products designed to support overall well-being. Its product portfolio includes Spirulina powder, Spirulina drink mixes, green tea blends, healthy soups, coconut water-based beverages, and other nutrient-rich formulations. Driven by research, innovation, and sustainability, Algallio Biotech aims to make the benefits of microalgae accessible through convenient and great-tasting products. The company combines scientific expertise with natural ingredients to promote healthier lifestyles while contributing to the growing demand for functional foods and wellness solutions. Based in Vadodara, Gujarat, Algallio Biotech continues to expand its presence in the health and nutrition sector through its commitment to quality and product development.",
    "startup_website": "http://www.algalliobiotech.com/",
    "contact_no": "9879311365",
    "social_links": {
      "facebook": "https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.algalliobiotech.com%2F"
    },
    "logo_initials": "AB",
    "category": "Food Technology",
    "subcategory": "Exit",
    "image_url": ""
  },
  {
    "id": 40,
    "startup_name": "Mom's Café",
    "ownername": "Neela Nagar",
    "description": "Mom’s Café is a health-focused food venture developing innovative bakery and snack products using nutritious alternative flours such as rajgira (amaranth), moraiyo (barnyard millet), and singhada (water chestnut) in place of refined wheat flour (maida). The idea originated from the need to create tasty bakery products that could be consumed during fasting periods while also offering healthier alternatives to conventional baked foods. Through continuous experimentation, the venture has developed a range of cakes, breads, snacks, and other bakery products that combine traditional ingredients with modern food preferences. The company aims to serve health-conscious consumers, individuals with gluten sensitivities, and people seeking nutritious alternatives for managing lifestyle-related conditions such as diabetes, cholesterol, and blood pressure. By replacing refined ingredients with wholesome traditional grains and avoiding artificial additives, the venture seeks to promote healthier eating habits while preserving taste, texture, and product quality.",
    "startup_website": "",
    "contact_no": "9825119365",
    "social_links": {},
    "logo_initials": "MC",
    "category": "Food Technology",
    "subcategory": "Exit",
    "image_url": ""
  },
  {
    "id": 41,
    "startup_name": "Greenshalla, ecoclub",
    "ownername": "mukesh chauhan",
    "description": "",
    "startup_website": "",
    "contact_no": "",
    "social_links": {},
    "logo_initials": "GE",
    "category": "Environmental science",
    "subcategory": "Exit",
    "image_url": ""
  },
  {
    "id": 42,
    "startup_name": "Xylooligosaccharide (XOS) nutraceutical platform",
    "ownername": "Dr. G. Shyamsunder Reddy",
    "description": "The company is developing a high-purity Xylooligosaccharide (XOS) nutraceutical platform using agricultural residues such as sugarcane, sorghum, corn, and bajra bagasse. Originally developed through research at IIT Madras and further advanced at SIIE-SRISTI BioNEST, the technology converts low-value agricultural biomass into premium prebiotic ingredients that support gut health and promote the growth of beneficial intestinal bacteria. The process utilizes proprietary enzymatic and biotechnological methods to produce highly purified XOS with superior prebiotic efficacy compared to conventional alternatives. The product is intended for applications across the nutraceutical, pharmaceutical, food, and beverage industries, where it can be incorporated into dietary supplements, functional foods, health drinks, and therapeutic formulations. By transforming agricultural waste into high-value health ingredients, the technology offers a sustainable and cost-effective solution for improving digestive health while creating additional value from agricultural by-products. With growing demand for prebiotics and gut-health products, the venture aims to establish an indigenous manufacturing platform for high-quality XOS and reduce dependence on imports in the Indian market.",
    "startup_website": "",
    "contact_no": "9177329341",
    "social_links": {},
    "logo_initials": "XN",
    "category": "Agriculture and life sciences",
    "subcategory": "Exit",
    "image_url": ""
  },
  {
    "id": 43,
    "startup_name": "GRASSROOTS Innovators-SRISTI",
    "ownername": "Bhartiben Patel",
    "description": "The enterprise is a women-led rural food processing venture focused on producing traditional millet-based and indigenous food products from the Dang district of Gujarat. Operating through a self-help group model, the venture specializes in value-added products such as finger millet (nagli/ragi) papad, chakri, bhurji, and other regional delicacies prepared using traditional methods and locally sourced ingredients. Established with the objective of creating sustainable livelihoods for rural women, the enterprise combines traditional food knowledge with community-based entrepreneurship. Its flagship millet papad products promote healthy and nutritious dietary alternatives while creating market opportunities for local agricultural produce. By empowering women through collective production and marketing, the venture contributes to rural economic development, preservation of traditional food practices, and promotion of nutritious millet-based foods among consumers.",
    "startup_website": "",
    "contact_no": "9099886155, 9898429745",
    "social_links": {},
    "logo_initials": "GI",
    "category": "Nutrient Food science",
    "subcategory": "Exit",
    "image_url": ""
  },
  {
    "id": 44,
    "startup_name": "Nutrient Dynamic Food",
    "ownername": "Arpita Doshi",
    "description": "Nutrition Dynamic Foods LLP (NDF) is a nutrition-focused food innovation company dedicated to developing functional and plant-based food products that support health and wellness. The company combines modern food technology with traditional nutritional wisdom to create value-added products designed to address changing lifestyle needs and promote better overall well-being. Its product development approach emphasizes innovation, quality, and scientifically driven nutritional solutions. Focused on research, sustainability, and health-conscious living, Nutrition Dynamic Foods works on creating nutrient-rich formulations using advanced processing techniques and natural ingredients. The company is committed to delivering innovative food products that contribute to nutrition security while supporting healthier lifestyles through functional foods and wellness-oriented solutions.",
    "startup_website": "",
    "contact_no": "7383547240",
    "social_links": {},
    "logo_initials": "ND",
    "category": "Food Microbiology",
    "subcategory": "Exit",
    "image_url": ""
  },
  {
    "id": 45,
    "startup_name": "GRASSROOTS Innovators-SRISTI",
    "ownername": "Rita ben Vora",
    "description": "",
    "startup_website": "",
    "contact_no": "",
    "social_links": {},
    "logo_initials": "GI",
    "category": "Human therapeutic",
    "subcategory": "Exit",
    "image_url": ""
  },
  {
    "id": 46,
    "startup_name": "Kama International Organic Pvt. Ltd.",
    "ownername": "Haresh Patel",
    "description": "Kama Organic is a leading organic agriculture brand dedicated to providing innovative and sustainable farming solutions. The company offers a wide range of organic fertilizers, bio-pesticides, fungicides, soil enhancers, pest control solutions, and crop nutrition products designed to improve soil health, increase crop productivity, and support chemical-free farming practices. With a strong focus on research and farmer-centric innovation, the brand promotes environmentally responsible agriculture across India. Committed to advancing sustainable farming, Kama Organic combines traditional agricultural knowledge with modern organic technologies to help farmers achieve healthier yields and long-term soil fertility. Through its extensive product portfolio and educational initiatives, the company continues to empower farming communities while contributing to the growth of eco-friendly and regenerative agriculture.",
    "startup_website": "https://kamaorganic.com/",
    "contact_no": "",
    "social_links": {},
    "logo_initials": "KI",
    "category": "Agriculture",
    "subcategory": "Exit",
    "image_url": ""
  },
  {
    "id": 47,
    "startup_name": "Connect Nature",
    "ownername": "Bhartiben Banker",
    "description": "Connect Nature is a social enterprise dedicated to promoting and marketing traditional handcrafted products created by rural and tribal artisans, particularly from the Dang district of Gujarat. The initiative works closely with local communities to bring indigenous art, bamboo crafts, wooden products, and other traditional creations to wider markets while ensuring that the economic benefits reach the original knowledge holders and artisans. The enterprise aims to preserve traditional craftsmanship by creating sustainable livelihood opportunities for rural communities through market access, product promotion, and customer awareness. By connecting consumers with authentic handmade products and supporting grassroots artisans, Connect Nature contributes to cultural preservation, rural entrepreneurship, and inclusive economic development while encouraging the appreciation of traditional arts and crafts.",
    "startup_website": "",
    "contact_no": "",
    "social_links": {},
    "logo_initials": "CN",
    "category": "",
    "subcategory": "Exit",
    "image_url": ""
  },
  {
    "id": 48,
    "startup_name": "Bijora Candy",
    "ownername": "Nilesh Patel",
    "description": "",
    "startup_website": "",
    "contact_no": "9998672096",
    "social_links": {},
    "logo_initials": "BC",
    "category": "",
    "subcategory": "Exit",
    "image_url": ""
  },
  {
    "id": 49,
    "startup_name": "IOTA",
    "ownername": "Vaibhav Shitole",
    "description": "IOTA Diagnostic is a healthcare innovation company focused on making diagnostics affordable, accessible and convenient through deep-tech medical solutions. The company develops user-friendly, home-based diagnostic technologies that enable individuals to access reliable healthcare testing without the need for complex hospital visits. Driven by the vision of improving healthcare accessibility for everyone, IOTA Diagnostic combines advanced technology, scientific research and patient-centered innovation to create simple, effective and scalable diagnostic solutions. Their flagship innovations include M-Strip™, India’s first affordable at-home HPV screening kit using menstrual blood and BioSampler™, a smart sample collection device designed for safe and convenient transport of blood and body fluid samples. Backed by trusted institutions such as IIM-A Ventures, BIRAC-DBT (Government of India), DST-STBI Vadodara, I-Hub Gujarat, SRISTI Innovations, Villgro Foundation and EDII Ahmedabad, the company is on a mission to make diagnostics more accessible, human-centric and scalable for people across urban and rural communities. IOTA Diagnostic is committed to building sustainable, affordable and high-quality healthcare technologies that empower early disease detection, improve preventive healthcare and make quality diagnostics available to everyone.",
    "startup_website": "https://iotadiagnostic.com/",
    "contact_no": "9096323869",
    "social_links": {},
    "logo_initials": "IO",
    "category": "",
    "subcategory": "Exit",
    "image_url": ""
  }

];

const logoModules = import.meta.glob('../assets/our_startup/logo/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const productModules = import.meta.glob('../assets/our_startup/startup_products/*.{png,jpg,jpeg,svg,webp}', { eager: true });

const logoUrls = Object.keys(logoModules).reduce((acc, key) => {
  const filename = key.split('/').pop();
  acc[filename] = logoModules[key].default;
  return acc;
}, {});

const productUrls = Object.keys(productModules).reduce((acc, key) => {
  const filename = key.split('/').pop();
  acc[filename] = productModules[key].default;
  return acc;
}, {});

const LOGO_OVERRIDES = {
  "Ayurvidhan research and development": "neti_neti.png",
  "Samrudhdhyog Venture - AAYUVEDA": "aayuveda.png",
  "Samrudhdhyog  AAYUVEDA": "aayuveda.png",
  "Sattvanik honey": "sattvahik.png",
  "Freni natural (SR Natural)": "ferni_natural.png",
  "Ambika": "ambica.png",
  "Kapes Care": "kapscare.png",
  "Prachin Jadibutti": "prachin_jadibuti.png",
  "Rusi Herbal Ayurveda": "rishi_herbal_ayurveda.png",
  "Barley Water": "Barley_water_works.png",
  "Brooks and Blooms": "Brook&blooms.jpeg",
  "Nutrient Dynamic Food": "NDF.png",
  "Bijora Candy": "byora_candy.png",
  "JB enterprise": "jb_enterprize.png",
  "Krushimool": "krishimool.png",
  "Colostrum": "radiom_heal.png"
};

const PRODUCT_ALIASES = {
  "Sattvanik honey": ["sattvahik", "sattvhik"],
  "Samrudhdhyog Venture - AAYUVEDA": ["aayuveda", "aayuveda1", "aayuveda2"],
  "Affinito": ["affinito", "affinitio"],
  "Chandramauli Ayurveda": ["chandramauli", "chanramauli"],
  "JB enterprise": ["jb_enterprize", "jb_enterpize"],
  "Freni natural (SR Natural)": ["ferni_natural", "freni_natural"],
  "Ambika": ["ambica", "ambika"],
  "Ayurvidhan research and development": ["neti_neti"],
  "Nisarg Organics": ["nisarg_organic_farm", "nisarg"],
  "H-Motive": ["hmotive", "h_motive"],
  "Kapes Care": ["kapescare", "kapscare"],
  "Krushimool": ["krishimool"],
  "Aayurprabha": ["aayuabha", "aayuprabha"],
  "AP Biologicals": ["ap_biological"],
  "Gauneeti": ["gaunitte", "ganeeti", "gauneeti"],
  "GRASSROOTS Innovators-SRISTI": ["grassroot_innovator"],
  "PIANTA Blossoms LLP": ["pianta_blossom"],
  "Prachin Jadibutti": ["prachin_jadibuti"],
  "Colostrum": ["radiom_heal", "radioml_heal"],
  "Rusi Herbal Ayurveda": ["rishi_herbal_ayurveda", "rishi_herbal_aayurveda"]
};

const getLogoForStartup = (startup) => {
  if (!startup) return null;
  const name = startup.startup_name;
  
  if (LOGO_OVERRIDES[name]) {
    const filename = LOGO_OVERRIDES[name];
    if (logoUrls[filename]) return logoUrls[filename];
  }
  
  const normName = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Exact normalized match
  for (const filename of Object.keys(logoUrls)) {
    const normFile = filename.split('.')[0].toLowerCase().replace(/[^a-z0-9]/g, '');
    if (normFile === normName) {
      return logoUrls[filename];
    }
  }

  // Substring match
  for (const filename of Object.keys(logoUrls)) {
    const normFile = filename.split('.')[0].toLowerCase().replace(/[^a-z0-9]/g, '');
    if (normName.includes(normFile) || normFile.includes(normName)) {
      return logoUrls[filename];
    }
  }

  return null;
};

const getProductsForStartup = (startup) => {
  if (!startup) return [];
  const name = startup.startup_name;
  const normName = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  const matches = [];
  
  for (const filename of Object.keys(productUrls)) {
    const fileBase = filename.split('.')[0].toLowerCase().replace(/[^a-z0-9]/g, '');
    const fileBaseNoDigits = fileBase.replace(/\d+$/, '');
    
    let isMatch = false;
    
    // Direct normalized check
    if (normName.includes(fileBaseNoDigits) || fileBaseNoDigits.includes(normName)) {
      isMatch = true;
    }
    
    // Alias check
    if (!isMatch && PRODUCT_ALIASES[name]) {
      for (const alias of PRODUCT_ALIASES[name]) {
        const normAlias = alias.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (fileBaseNoDigits.includes(normAlias) || normAlias.includes(fileBaseNoDigits)) {
          isMatch = true;
          break;
        }
      }
    }
    
    if (isMatch) {
      matches.push(productUrls[filename]);
    }
  }
  
  return matches;
};

const FLOATING_ANIMATIONS = [
  "animate-float-1",
  "animate-float-2",
  "animate-float-3",
  "animate-float-4"
];

const OurStartups = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const closeModal = () => {
    setSelectedStartup(null);
    setSearchParams({});
  };

  const sectors = ['All', 'BioNest', 'Agri & Lifestyle Entrepreneur'];

  // Handle URL query parameter startup modal trigger
  useEffect(() => {
    const startupId = searchParams.get('startup');
    if (startupId) {
      const startup = STARTUPS_DATA.find(s => s.id === parseInt(startupId, 10));
      if (startup) {
        setSelectedStartup(startup);
      }
    }
  }, [searchParams]);

  // Reset subcategory filter when main category changes
  useEffect(() => {
    setSelectedSubcategory('All');
  }, [selectedSector]);

  // Filtered Startups
  const filteredStartups = useMemo(() => {
    return STARTUPS_DATA.filter(startup => {
      const matchesSearch = (startup.startup_name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                            (startup.description || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                            (startup.ownername || '').toLowerCase().includes(searchTerm.toLowerCase());
      
      const isAgri = (startup.category || '').toLowerCase().includes('agri') || (startup.category || '').toLowerCase().includes('lifestyle');
      const isBioNest = !isAgri;

      let matchesSector = false;
      if (selectedSector === 'All') {
        matchesSector = true;
      } else if (selectedSector === 'BioNest') {
        if (isBioNest) {
          if (selectedSubcategory === 'All') {
            matchesSector = true;
          } else if (selectedSubcategory === 'Active') {
            const sub = (startup.subcategory || '').toLowerCase();
            matchesSector = sub === 'active' || sub === '';
          } else if (selectedSubcategory === 'Exit') {
            const sub = (startup.subcategory || '').toLowerCase();
            matchesSector = sub === 'exit' || sub === 'exited';
          } else {
            matchesSector = (startup.subcategory || '').toLowerCase() === selectedSubcategory.toLowerCase();
          }
        }
      } else if (selectedSector === 'Agri & Lifestyle Entrepreneur') {
        matchesSector = isAgri;
      }

      return matchesSearch && matchesSector;
    });
  }, [searchTerm, selectedSector, selectedSubcategory]);

  return (
    <div className="bg-gray-50 text-gray-700 min-h-screen relative overflow-hidden font-sans pb-24">
      
      {/* Inline styles for custom floating animations and pauses */}
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float4 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-13px); }
        }
        .animate-float-1 { animation: float1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float2 8s ease-in-out infinite; }
        .animate-float-3 { animation: float3 7s ease-in-out infinite; }
        .animate-float-4 { animation: float4 9s ease-in-out infinite; }
        
        .pause-float-on-hover:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-750/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Header */}
      <div className="relative bg-emerald-900 py-24 lg:py-32 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Farming Greenery Background"
            className="w-full h-full object-cover opacity-15 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 to-transparent"></div>
        </div>

        {/* Header Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold tracking-wider uppercase border border-emerald-500/30">
            SRISTI Incubatees
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mt-6">
            Our Startups
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-emerald-100/80 text-lg leading-relaxed">
            Discover the businesses driven by grassroots ingenuity, rural technologies, and scientific research.
          </p>
          <div className="w-24 h-1.5 bg-emerald-400 mx-auto mt-6 rounded-full shadow-sm"></div>
        </div>
      </div>

      {/* Unified Statistics Panel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white border border-gray-150 rounded-[2.5rem] p-8 md:p-10 shadow-lg flex flex-col md:flex-row justify-around items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-150 gap-6 md:gap-0">
          {[
            { label: "Startups Incubated", value: "70", suffix: "+", icon: Briefcase, color: "text-emerald-600" },
            { label: "Patents Filed", value: "15", suffix: "+", icon: FileCheck, color: "text-teal-600" },
            { label: "Funding", value: "2", prefix: "₹", suffix: "Cr+", icon: DollarSign, color: "text-green-600" },
            { label: "Success Ratio", value: "80", suffix: "%", icon: Compass, color: "text-blue-600" }
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="flex-1 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left px-6 py-4 md:py-2"
              >
                <div className={`p-3 rounded-2xl bg-emerald-50 ${stat.color} flex-shrink-0`}>
                  <Icon size={28} />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                    <AnimatedCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs md:text-sm text-gray-505 font-semibold mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filter, Search & Directory Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Controls Bar */}
        <div className="flex flex-col gap-6 mb-12 bg-white border border-gray-150 rounded-3xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Search bar */}
            <div className="relative flex-grow max-w-md">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Search size={18} />
              </span>
              <input
                type="text"
                placeholder="Search by name, owner, or tech..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-2xl py-3 pl-11 pr-4 focus:outline-none focus:border-emerald-500/50 transition-colors placeholder-gray-400 focus:ring-1 focus:ring-emerald-500/30 text-sm"
              />
            </div>

            {/* Sector Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {sectors.map((sector) => (
                <button
                  key={sector}
                  onClick={() => setSelectedSector(sector)}
                  className={`px-4 py-2 text-sm font-medium rounded-xl border transition-all duration-300 cursor-pointer ${
                    selectedSector === sector
                      ? 'bg-emerald-600 border-emerald-500 text-white shadow-sm shadow-emerald-650/10'
                      : 'bg-white border-gray-200 text-gray-500 hover:text-emerald-700 hover:border-emerald-200'
                  }`}
                >
                  {sector}
                </button>
              ))}
            </div>
          </div>

          {/* BioNest Subcategory Tabs */}
          {selectedSector === 'BioNest' && (
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">BioNEST Status:</span>
              <div className="flex gap-2">
                {['All', 'Active', 'Exit'].map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubcategory(sub)}
                    className={`px-4 py-1.5 text-xs font-bold rounded-xl border transition-all duration-200 cursor-pointer ${
                      selectedSubcategory === sub
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                        : 'bg-white border-gray-200 text-gray-500 hover:text-emerald-700 hover:border-emerald-200'
                    }`}
                  >
                    {sub} Startups
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Startups Directory Grid */}
        {filteredStartups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStartups.map((startup, index) => {
              const logoUrl = getLogoForStartup(startup);

              return (
                <div
                  key={startup.id}
                  onClick={() => setSelectedStartup(startup)}
                  className="bg-white/95 border border-gray-200 rounded-[2.5rem] p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[1.03] hover:border-emerald-300 hover:shadow-[0_10px_30px_rgba(16,185,129,0.08)] cursor-pointer"
                >
                  <div>
                    {/* Header: Brand Logo */}
                    <div className="flex justify-between items-start mb-6">
                      {logoUrl ? (
                        <div className="w-14 h-14 rounded-2xl bg-white border border-gray-150 flex items-center justify-center p-1.5 shadow-sm">
                          <img 
                            src={logoUrl} 
                            alt={`${startup.startup_name} Logo`} 
                            className="w-full h-full object-contain rounded-xl"
                          />
                        </div>
                      ) : (
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm">
                          <Briefcase size={22} />
                        </div>
                      )}
                    </div>

                    {/* Startup Info */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-emerald-700 transition-colors">
                      {startup.startup_name}
                    </h3>
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4 flex items-center gap-1.5">
                      <User size={14} className="text-emerald-600" /> Lead: {startup.ownername}
                    </p>
                    <p className="text-gray-500 leading-relaxed text-sm mb-6 line-clamp-4">
                      {startup.description}
                    </p>
                  </div>

                  {/* Read More Section at the Bottom */}
                  <div className="pt-6 border-t border-gray-100">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedStartup(startup);
                      }}
                      className="w-full py-3.5 px-4 bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-700 font-bold rounded-2xl text-center transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm text-sm"
                    >
                      About Startup
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-gray-150 rounded-3xl shadow-sm">
            <p className="text-gray-400 text-lg">No startups match your search terms.</p>
          </div>
        )}

      </div>

      {/* MODAL: Startup Detail View (Larger and Scrollable) */}
      {selectedStartup && (() => {
        const startupLogoUrl = getLogoForStartup(selectedStartup);
        const startupProducts = getProductsForStartup(selectedStartup);
        const hasBanner = !!(selectedStartup.image_url || startupProducts.length > 0);
        const modalBannerUrl = selectedStartup.image_url || (startupProducts.length > 0 ? startupProducts[0] : null);

        return (
          <div 
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 cursor-pointer"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white border border-gray-250 rounded-[2.5rem] w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200 cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-white/90 hover:bg-white border border-gray-200 text-gray-500 hover:text-emerald-600 transition-colors shadow-md cursor-pointer z-50"
              >
                <X size={20} />
              </button>

              {/* Scrollable Container */}
              <div className="flex-1 overflow-y-auto">
                
                {/* Modal Header Banner */}
                {hasBanner && (
                  <div className="relative h-64 md:h-96 flex-shrink-0 border-b border-gray-100">
                    <img 
                      src={modalBannerUrl} 
                      alt={selectedStartup.startup_name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Modal Body Content */}
                <div className="p-6 md:p-10 space-y-8">
                  
                  {/* Startup Name & Owner name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-gray-100">
                    <div className="flex items-center gap-4 pr-8">
                      {startupLogoUrl && (
                        <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center p-2 shadow-sm flex-shrink-0">
                          <img 
                            src={startupLogoUrl} 
                            alt={`${selectedStartup.startup_name} Logo`} 
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </div>
                      )}
                      <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Startup name</h4>
                        <p className="text-xl font-bold text-gray-900">{selectedStartup.startup_name}</p>
                        {(selectedStartup.category || selectedStartup.subcategory) && (
                          <div className="mt-1 flex flex-wrap gap-1.5">
                            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-250 uppercase tracking-wider">
                              {selectedStartup.category} {selectedStartup.subcategory ? `• ${selectedStartup.subcategory}` : ''}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="md:pr-12">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Owner Name</h4>
                      <p className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <User size={20} className="text-emerald-600" />
                        {selectedStartup.ownername}
                      </p>
                    </div>
                  </div>

                  {/* 3: Description */}
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Description</h4>
                    <p className="text-gray-600 leading-relaxed text-base whitespace-pre-line">
                      {selectedStartup.description}
                    </p>
                  </div>

                  {startupProducts && startupProducts.length > 0 && (
                    <div className="pt-2">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {startupProducts.map((prodUrl, idx) => (
                          <div 
                            key={idx} 
                            className="relative group overflow-hidden rounded-2xl border border-gray-100 aspect-square bg-gray-50 flex items-center justify-center cursor-zoom-in shadow-sm hover:shadow-md transition-all duration-300"
                            onClick={() => window.open(prodUrl, '_blank')}
                          >
                            <img 
                              src={prodUrl} 
                              alt={`${selectedStartup.startup_name} Product ${idx + 1}`} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <span className="text-white text-xs font-semibold px-3 py-1.5 bg-black/60 rounded-full backdrop-blur-sm">
                                View Full Image
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 4 & 5: Startup Website & Contact no */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 pb-6 border-b border-gray-100">
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Startup Website</h4>
                      {selectedStartup.startup_website ? (
                        <a 
                          href={selectedStartup.startup_website.startsWith('http') ? selectedStartup.startup_website : `https://${selectedStartup.startup_website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-emerald-750 hover:text-emerald-950 font-semibold underline underline-offset-4 decoration-emerald-200 transition-colors text-sm break-all"
                        >
                          <Globe size={18} />
                          {selectedStartup.startup_website}
                        </a>
                      ) : (
                        <p className="text-gray-400 italic text-sm">Not Available</p>
                      )}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Contact No</h4>
                      {selectedStartup.contact_no ? (
                        <p className="text-gray-900 font-semibold flex items-center gap-2 text-sm">
                          <Phone size={18} className="text-emerald-600" />
                          {selectedStartup.contact_no}
                        </p>
                      ) : (
                        <p className="text-gray-400 italic text-sm">Not Available</p>
                      )}
                    </div>
                  </div>

                  {/* 6: Social Links */}
                  {selectedStartup.social_links && Object.keys(selectedStartup.social_links).length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Social Handles</h4>
                      <div className="flex gap-4">
                        {selectedStartup.social_links.x && (
                          <a 
                            href={selectedStartup.social_links.x} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-12 h-12 rounded-xl bg-gray-50 hover:bg-black hover:text-white border border-gray-200 flex items-center justify-center text-gray-500 transition-all duration-300 hover:scale-105 shadow-sm"
                            title="X / Twitter"
                          >
                            <FaTwitter size={20} />
                          </a>
                        )}
                        {selectedStartup.social_links.youtube && (
                          <a 
                            href={selectedStartup.social_links.youtube} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-12 h-12 rounded-xl bg-gray-50 hover:bg-red-600 hover:text-white border border-gray-255 flex items-center justify-center text-gray-550 transition-all duration-300 hover:scale-105 shadow-sm"
                            title="YouTube"
                          >
                            <FaYoutube size={20} />
                          </a>
                        )}
                        {selectedStartup.social_links.instagram && (
                          <a 
                            href={selectedStartup.social_links.instagram} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-12 h-12 rounded-xl bg-gray-50 hover:bg-pink-600 hover:text-white border border-gray-255 flex items-center justify-center text-gray-550 transition-all duration-300 hover:scale-105 shadow-sm"
                            title="Instagram"
                          >
                            <FaInstagram size={20} />
                          </a>
                        )}
                        {selectedStartup.social_links.facebook && (
                          <a 
                            href={selectedStartup.social_links.facebook} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-12 h-12 rounded-xl bg-gray-50 hover:bg-blue-650 hover:text-white border border-gray-255 flex items-center justify-center text-gray-550 transition-all duration-300 hover:scale-105 shadow-sm"
                            title="Facebook"
                          >
                            <FaFacebook size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </div>
        );
      })()}

    </div>
  );
};

export default OurStartups;

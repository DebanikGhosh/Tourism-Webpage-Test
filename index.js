const pexels = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1000`;

const heritageSites = [
    { id: 1, name: "Amber Fort", img: pexels("19867646"), desc: "A majestic fort built with red sandstone and marble, overlooking Maota Lake.", history: "Built in 1592 by Raja Man Singh I, Amber Fort served as the main residence of the Rajput Rulers for centuries.", architecture: "Features the breathtaking Sheesh Mahal (Mirror Palace) and the Diwan-e-Aam.", timings: "8:00 AM - 5:30 PM", fee: "₹100 (Indians)", tip: "Walk up the ramparts instead of opting for elephant rides to promote ethical tourism.", trivia: "The Sheesh Mahal was designed so that a single candle flame could light up the entire hall via thousands of mirrors." },
    { id: 2, name: "Hawa Mahal", img: pexels("15344918"), desc: "The 'Palace of Winds' is renowned for its intricate honeycomb facade.", history: "Constructed in 1799 by Maharaja Sawai Pratap Singh. It allowed royal ladies to observe everyday life unseen.", architecture: "The five-story exterior is akin to a honeycomb with 953 small windows called Jharokhas.", timings: "9:00 AM - 4:30 PM", fee: "₹50 (Indians)", tip: "The absolute best time to visit is early morning when the golden sunrise illuminates the facade.", trivia: "It is popularly said to be among the tallest buildings built without a deep foundation; its curved, tapering shape helps keep it stable." },
    { id: 3, name: "City Palace", img: pexels("17070403"), desc: "A stunning blend of Rajasthani and Mughal architecture in the heart of the city.", history: "Established in 1727 by Maharaja Sawai Jai Singh II. It continues to be the home of the Jaipur royal family today.", architecture: "A vast complex of courtyards, gardens, and buildings including the Chandra Mahal.", timings: "9:30 AM - 5:00 PM", fee: "₹200 (Indians)", tip: "Don't miss the Pritam Niwas Chowk courtyard inside, which features four beautiful painted doorways.", trivia: "It houses two massive sterling silver vessels which hold the Guinness World Record for the largest silver objects ever crafted." },
    { id: 4, name: "Jantar Mantar", img: pexels("37967925"), desc: "A UNESCO World Heritage astronomical observation site.", history: "Built in 1734 by King Jai Singh II, an avid astronomer.", architecture: "Consists of nineteen architectural astronomical instruments built from local stone and marble.", timings: "9:00 AM - 4:30 PM", fee: "₹50 (Indians)", tip: "Hire a guide! Without context, they look like abstract sculptures.", trivia: "The Vrihat Samrat Yantra is the world's largest sundial, capable of telling local time to an accuracy of two seconds." },
    { id: 5, name: "Nahargarh Fort", img: pexels("19070885"), desc: "Standing on the edge of the Aravalli Hills, offering panoramic views of Jaipur.", history: "Built in 1734 to bolster the city's defense. Legend says the construction was hindered by a spirit.", architecture: "The Madhavendra Bhawan features identical suites for the queens connected by decorated corridors.", timings: "10:00 AM - 5:30 PM", fee: "₹50 (Indians)", tip: "This fort offers the absolute best sunset view over the entire city.", trivia: "The fort was never attacked by enemies during its entire history." },
    { id: 6, name: "Jaigarh Fort", img: pexels("19867674"), desc: "Known as the Fort of Victory, it houses the world's largest cannon on wheels.", history: "Built by Jai Singh II in 1726. It served as the main cannon foundry for the Rajput rulers.", architecture: "Highly fortified with thick walls of red sandstone extending over 3 kilometers.", timings: "9:00 AM - 4:30 PM", fee: "₹35 (Indians)", tip: "Explore the subterranean passages connecting Jaigarh to Amber Fort.", trivia: "The massive Jaivana Cannon was only fired once in history during a test run." },
    { id: 7, name: "Jal Mahal", img: pexels("19149581"), desc: "A beautiful Water Palace situated in the middle of Man Sagar Lake.", history: "Originally built in 1699, it was renovated by Maharaja Jai Singh II as a hunting lodge.", architecture: "A five-story building. When the lake is full, four floors are submerged underwater.", timings: "Lakeside viewing only; the palace interior is closed to visitors", fee: "Free", tip: "Visit during the evening when the palace is illuminated with golden lights.", trivia: "The mortar used to build it was a unique mix of lime, sand, and jaggery to prevent water seepage." },
    { id: 8, name: "Albert Hall Museum", img: pexels("19149596"), desc: "The oldest museum of the state, showcasing a rich collection of artifacts.", history: "Opened as a public museum in 1887. It was named after King Edward VII.", architecture: "A stunning masterpiece of Indo-Saracenic architecture featuring intricate stone ornamentation.", timings: "9:00 AM - 5:00 PM", fee: "₹40 (Indians)", tip: "The museum looks breathtaking when illuminated with colorful lights at night.", trivia: "The museum houses a genuine Egyptian Mummy belonging to the Ptolemaic epoch." },
    { id: 9, name: "Panna Meena Ka Kund", img: pexels("3379051"), desc: "A mesmerizing 16th-century stepwell known for its symmetrical, zig-zag geometry.", history: "Believed to date from the 16th century under the Amber rulers and renovated in the 18th century by Sawai Jai Singh II. It served as a community gathering space.", architecture: "An architectural marvel featuring perfectly symmetrical, interlocking staircases.", timings: "7:00 AM - 6:00 PM", fee: "Free", tip: "Photography on the stairs is highly regulated now, bring a zoom lens to capture the geometry.", trivia: "Local legend says it's impossible to use the exact same set of stairs to go down and come back up." },
    { id: 10, name: "Birla Mandir", img: pexels("35357873"), desc: "A pristine white marble Hindu temple dedicated to Lord Vishnu and Goddess Lakshmi.", history: "Built in 1988 by the B.M. Birla Foundation on land given by the Maharaja.", architecture: "Built entirely of high-quality white marble, featuring three large domes.", timings: "8:00 AM - 8:00 PM", fee: "Free", tip: "Surrounded by lush gardens, it's a peaceful retreat especially beautiful at sunset.", trivia: "The exterior walls feature carvings not just of Hindu gods, but of historical figures like Socrates." },
    { id: 11, name: "Galtaji Temple", img: pexels("16534741"), desc: "An ancient Hindu pilgrimage site nestled in a mountain pass, famous for its springs.", history: "Built in the 18th century by Diwan Rao Kriparam. A retreat for ascetics since the 1500s.", architecture: "Built with pink sandstone right into the mountain crevices featuring sacred water tanks.", timings: "5:00 AM - 9:00 PM", fee: "Free", tip: "Widely known as the 'Monkey Temple'. Keep your belongings secure!", trivia: "The natural spring emerges from a rock carved in the shape of a cow's head." },
    { id: 12, name: "Patrika Gate", img: pexels("8551527"), desc: "A vibrant, monument-sized gate showcasing the cultural heritage of Rajasthan.", history: "A modern addition built in 2016 at Jawahar Circle to serve as the ninth gate of Jaipur.", architecture: "Each pillar is intricately hand-painted with historical facts and vibrant motifs.", timings: "Open 24/7", fee: "Free", tip: "An absolute Instagrammer's paradise! Arrive early morning for empty corridors.", trivia: "The gate integrates architectural elements from all the diverse regions of Rajasthan." },
    { id: 13, name: "Johari Bazaar", img: pexels("17443126"), desc: "The oldest and most vibrant gemstone and jewelry market in Jaipur.", history: "Has been the commercial heart of Jaipur since the city was founded in 1727.", architecture: "Lined with uniform pink-terracotta shops featuring standard Rajput archways.", timings: "10:00 AM - 8:00 PM", fee: "Free", tip: "Don't forget to bargain hard, and look out for shops selling traditional jewelry.", trivia: "Jaipur is one of the world's largest centers for hand-cutting and polishing emeralds." },
    { id: 14, name: "Sisodia Rani Garden", img: pexels("23910987"), desc: "A lush palace garden featuring multi-tiered designs and painted pavilions.", history: "Built in 1728 by Maharaja Sawai Jai Singh for his second queen as a royal retreat.", architecture: "A classic example of Mughal-style garden architecture blended with Rajput aesthetics.", timings: "8:00 AM - 5:00 PM", fee: "₹50 (Indians)", tip: "A tranquil escape from the dusty city noise perfect for a quiet afternoon.", trivia: "The pavilions are painted with beautiful murals depicting the story of Lord Krishna." },
    { id: 15, name: "Rambagh Palace", img: pexels("35394354"), desc: "Once the residence of the Maharaja of Jaipur, now one of the world's most luxurious heritage hotels.", history: "Built in 1835, it transitioned from a royal hunting lodge to the primary residence of Maharaja.", architecture: "Features exquisite cupolas, hand-carved marble latticework, and sprawling Mughal gardens.", timings: "Open to Guests & Diners", fee: "Varies (High-End Dining)", tip: "Book a table for High Tea at the Verandah Café to experience the royal hospitality.", trivia: "It is widely considered one of the finest heritage hotels in the world." }
];

const culturalGallery = [
    { name: "Rajasthani Spices", img: pexels("2802527") },
    { name: "Desert Camels", img: pexels("30282657") },
    { name: "Jaipuri Bangles", img: pexels("753969") },
    { name: "Traditional Thali", img: pexels("39477971") },
    { name: "Traditional Pottery", img: pexels("13747285") },
    { name: "Folk Dancers", img: pexels("32819587") },
    { name: "Vintage Royal Car", img: pexels("6700996") }, 
    { name: "Local Handicrafts", img: pexels("14993860") }
];

const fallbackImg = (name) => getLocalFallback(name);

function getLocalFallback(name) {
    const encodedName = name.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
        <rect width="800" height="600" fill="#7A2440"/>
        <text x="50%" y="50%" font-family="serif" font-size="48" fill="#FFFFFF" text-anchor="middle" dominant-baseline="middle">${encodedName}</text>
    </svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const appContainer = document.getElementById('app-container');

// ---- Page Rendering Engine ----
const pages = {
    home: () => `
        <div style="display: flex; flex-direction: column; align-items: center;">
            <span class="overline animate-up" style="animation-delay: 0.1s; text-align:center;">Land of Kings</span>
            <h2 class="page-title animate-up" style="animation-delay: 0.2s; border:none; text-align:center; margin-bottom: 15px;">Discover The Pink City</h2>
            
            <div class="animate-up" style="position: relative; overflow: hidden; border-radius: 12px; margin-bottom: 25px; box-shadow: 0 8px 25px var(--shadow-heavy); width: 100%; animation-delay: 0.3s;">
                <img src="https://images.pexels.com/photos/29624142/pexels-photo-29624142.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                     onerror="this.onerror=null; this.src='${fallbackImg('Jaipur Tourism', 1200, 300)}';"
                     class="hero-img" style="width:100%; height: 300px; object-fit: cover; display:block; filter: brightness(0.85);" alt="Jaipur Banner">
                <div class="hero-caption"><span class="hero-title">Jaipur<span class="hero-native" lang="hi">जयपुर</span></span><span class="hero-line">Rose-pink walls, four centuries of royal craft.</span></div>
            </div>
            
            <div class="animate-up" style="max-width: 900px; margin-bottom: 15px; animation-delay: 0.4s; text-align: center;">
                <p class="drop-cap" style="font-size: 1.05rem; line-height: 1.7; color: var(--text-muted); text-align: left;">
                    Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is a vibrant fusion of old-world charm and modern dynamism. It is a city where every street, every palace, and every courtyard whispers tales of royal valor and artistic brilliance. As the gateway to India's most flamboyant state, Jaipur opens up a world of majestic forts, grand palaces, and rich cultural tapestries.
                </p>
            </div>

            <div class="decorative-divider animate-up" style="margin: 40px 0 35px 0;">✦ ✧ ✦ ✧ ✦</div>
            
            <div class="animate-up" style="width: 100%; margin-bottom: 30px; text-align: center;">
                <span class="overline" style="text-align: center;">Curated Experiences</span>
                <h3 style="font-family: 'Playfair Display', serif; color: var(--primary); font-size: 2.2rem; margin-top: 5px;">Why Visit Jaipur?</h3>
            </div>
            
            <div class="grid-container animate-up" style="width: 100%; margin-bottom: 40px;">
                <div class="feature-card" style="padding: 20px;">
                    <span style="font-size: 1.8rem; display: block; margin-bottom: 10px;">🕌</span>
                    <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px; font-family:'Playfair Display', serif;">Living Heritage</h4>
                    <p style="color: var(--text-muted); line-height: 1.5; font-size: 0.95rem;">Home to UNESCO World Heritage Sites. The city's grid-like planning and pink terracotta architecture remain a marvel.</p>
                </div>
                <div class="feature-card" style="padding: 20px;">
                    <span style="font-size: 1.8rem; display: block; margin-bottom: 10px;">🐘</span>
                    <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px; font-family:'Playfair Display', serif;">Royal Lifestyle</h4>
                    <p style="color: var(--text-muted); line-height: 1.5; font-size: 0.95rem;">From vintage car rallies to opulent heritage hotel stays, experience exactly how the Rajput royalty lived.</p>
                </div>
                <div class="feature-card" style="padding: 20px;">
                    <span style="font-size: 1.8rem; display: block; margin-bottom: 10px;">🥘</span>
                    <h4 style="color: var(--primary); font-size: 1.2rem; margin-bottom: 10px; font-family:'Playfair Display', serif;">Culinary Magic</h4>
                    <p style="color: var(--text-muted); line-height: 1.5; font-size: 0.95rem;">Indulge in fiery Laal Maas, rich Dal Baati Churma, and decadent Ghevar sweets that define the city's heritage.</p>
                </div>
            </div>

            <div class="animate-up" style="width: 100%; margin-bottom: 40px;">
                <h3 style="font-family: 'Playfair Display', serif; color: var(--primary); font-size: 1.8rem; margin-bottom: 15px; text-align:center;">A Glimpse of the Magic</h3>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
                    <img src="${heritageSites[1].img}" style="width: 100%; height: 160px; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 12px var(--shadow);" alt="Hawa Mahal">
                    <img src="${heritageSites[14].img}" style="width: 100%; height: 160px; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 12px var(--shadow);" alt="Palace">
                    <img src="${culturalGallery[5].img}" style="width: 100%; height: 160px; object-fit: cover; border-radius: 8px; box-shadow: 0 4px 12px var(--shadow);" alt="Dancers">
                </div>
                <div style="text-align: center; margin-top: 15px;">
                    <button onclick="window.location.hash='#gallery'" class="btn-primary" style="background: transparent; color: var(--primary); border: 2px solid var(--primary); box-shadow: none; padding: 8px 20px;">View Full Gallery</button>
                </div>
            </div>

            <div class="animate-up" style="width: 100%; background: linear-gradient(to right, rgba(197, 160, 89, 0.1), transparent); padding: 25px; border-radius: 12px; border-left: 4px solid var(--gold); margin-bottom: 35px;">
                <h3 style="font-family: 'Playfair Display', serif; color: var(--primary); font-size: 1.6rem; margin-bottom: 15px;">Suggested Royal Itineraries</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
                    <div class="itinerary-card">
                        <span class="overline">3-Day Express</span>
                        <h4 style="color: var(--primary); font-size: 1.1rem; margin-bottom: 8px;">The Forts & Palaces Tour</h4>
                        <ul style="color: var(--text-muted); line-height: 1.5; list-style-position: inside; font-size: 0.9rem;">
                            <li>Day 1: City Palace & Jantar Mantar</li>
                            <li>Day 2: Amber Fort & Elephant Sanctuary</li>
                            <li>Day 3: Hawa Mahal & Johari Bazaar</li>
                        </ul>
                    </div>
                    <div class="itinerary-card">
                        <span class="overline">5-Day Immersive</span>
                        <h4 style="color: var(--primary); font-size: 1.1rem; margin-bottom: 8px;">The Grand Rajputana</h4>
                        <ul style="color: var(--text-muted); line-height: 1.5; list-style-position: inside; font-size: 0.9rem;">
                            <li>Days 1-3: Core Forts & Museums</li>
                            <li>Day 4: Galtaji Temple & Stepwells</li>
                            <li>Day 5: Chokhi Dhani Cultural Village</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h3 class="animate-up" style="font-family: 'Playfair Display', serif; color: var(--primary); font-size: 1.8rem; margin-bottom: 20px; text-align: center;">Guest Chronicles</h3>
            <div class="grid-container animate-up" style="width: 100%; margin-bottom: 35px;">
                <div class="review-card">
                    <div class="stars">★★★★★</div>
                    <p style="font-style: italic; color: var(--text-main); margin-bottom: 8px; font-size: 0.9rem;">"Walking through the City Palace felt like stepping into a time machine. A must-visit!"</p>
                    <strong style="color: var(--primary); font-family: 'Cinzel', serif; font-size: 0.85rem;">— Sarah Jenkins, UK</strong>
                </div>
                <div class="review-card">
                    <div class="stars">★★★★★</div>
                    <p style="font-style: italic; color: var(--text-main); margin-bottom: 8px; font-size: 0.9rem;">"The sunset from Nahargarh Fort is a memory I will cherish forever. Unmatched hospitality."</p>
                    <strong style="color: var(--primary); font-family: 'Cinzel', serif; font-size: 0.85rem;">— David M., Australia</strong>
                </div>
                <div class="review-card">
                    <div class="stars">★★★★★</div>
                    <p style="font-style: italic; color: var(--text-main); margin-bottom: 8px; font-size: 0.9rem;">"They organized a vintage car pickup for our anniversary. Truly treated like royalty."</p>
                    <strong style="color: var(--primary); font-family: 'Cinzel', serif; font-size: 0.85rem;">— Anjali & Rohan, India</strong>
                </div>
            </div>
            
            <div class="animate-up" style="width: 100%; padding: 25px; background: var(--surface); border: 1px solid var(--border); border-radius: 12px; text-align: center; box-shadow: 0 6px 15px var(--shadow); margin-bottom: 35px;">
                <span class="overline">Join The Guest List</span>
                <h3 style="font-family: 'Playfair Display', serif; color: var(--primary); font-size: 1.6rem; margin-bottom: 10px;">The Royal Dispatch</h3>
                <p style="color: var(--text-muted); margin-bottom: 15px; font-size: 0.9rem;">Subscribe to receive exclusive access to private heritage tours and cultural itineraries.</p>
                <form onsubmit="event.preventDefault(); alert('Thank you for subscribing to The Royal Dispatch!');" style="display: flex; max-width: 400px; margin: 0 auto; gap: 8px;">
                    <input type="email" required placeholder="Enter your email" style="flex: 1; padding: 10px; border: 1px solid var(--border); border-radius: 6px; font-family: 'Poppins', sans-serif; font-size: 0.9rem;">
                    <button type="submit" class="btn-primary" style="padding: 10px 20px; border-radius: 6px;">Subscribe</button>
                </form>
            </div>

            <div class="animate-up" style="padding: 30px 20px; background: linear-gradient(135deg, var(--primary), #4a1014); color: white; border-radius: 12px; box-shadow: 0 10px 20px var(--shadow-heavy); width: 100%; text-align: center;">
                <span class="overline" style="color: #fff; opacity: 0.8; margin-bottom: 8px;">Your Journey Begins</span>
                <h3 style="font-family: 'Playfair Display', serif; font-size: 1.8rem; margin-bottom: 12px; color: var(--gold);">Let Us Host You Like Royalty</h3>
                <p style="margin-bottom: 20px; font-size: 0.95rem; opacity: 0.9; max-width: 450px; margin-left: auto; margin-right: auto; line-height: 1.5;">Book your custom heritage stay and guided tours with our concierge today.</p>
                <button onclick="window.location.hash='#booking'" class="btn-primary" style="background: var(--gold); color: #fff; padding: 12px 30px; font-size: 1rem;">Reserve Your Stay</button>
            </div>
        </div>
    `,
    heritage: () => `
        <span class="overline animate-up" style="text-align: center; animation-delay: 0.1s;">Explore The</span>
        <h2 class="page-title animate-up" style="animation-delay: 0.2s;">Heritage Sites</h2>
        <div class="grid-container">
            ${heritageSites.map((site, index) => `
                <a href="#site-${site.id}" class="heritage-card animate-up" style="animation-delay: ${(index * 0.03) + 0.3}s">
                    <img loading="lazy" src="${site.img}" onerror="this.onerror=null; this.src='${getLocalFallback(site.name)}';" alt="${site.name}">
                    <div class="card-overlay">
                        <div style="width: 100%;">
                            <h3>${site.name}</h3>
                            <span style="display: block; color: var(--gold); font-size: 0.85rem; margin-top: 6px; font-family: 'Cinzel', serif; letter-spacing: 1px;">Explore Site &rarr;</span>
                        </div>
                    </div>
                </a>
            `).join('')}
        </div>
    `,
    booking: () => `
        <span class="overline animate-up" style="text-align: center; animation-delay: 0.1s;">Concierge Services</span>
        <h2 class="page-title animate-up" style="animation-delay: 0.2s;">Royal Reservation</h2>
        
        <div class="booking-layout animate-up" style="animation-delay: 0.3s;">
            <form class="booking-form" onsubmit="handleBooking(event)">
                <div class="form-group full-width">
                    <h3 style="font-family: 'Playfair Display', serif; color: var(--primary); margin-bottom: 5px; font-size: 1.2rem;">Guest Details</h3>
                </div>
                <div class="form-group">
                    <label>Honorable Guest Name</label>
                    <input type="text" required placeholder="Enter your full name">
                </div>
                <div class="form-group">
                    <label>Email Address</label>
                    <input type="email" required placeholder="contact@example.com">
                </div>
                <div class="form-group">
                    <label>Phone Number (Optional)</label>
                    <input type="tel" placeholder="+91 xxxxx xxxxx">
                </div>
                <div class="form-group">
                    <label>Arrival Flight (Optional)</label>
                    <input type="text" placeholder="e.g. AI-102">
                </div>
                
                <div class="form-group full-width" style="margin-top: 10px;">
                    <h3 style="font-family: 'Playfair Display', serif; color: var(--primary); margin-bottom: 5px; font-size: 1.2rem;">Stay Details</h3>
                </div>
                <div class="form-group">
                    <label>Check-in date</label>
                    <input type="date" required>
                </div>
                <div class="form-group">
                    <label>Number of Guests</label>
                    <input type="number" min="1" max="10" required>
                </div>
                <div class="form-group">
                    <label>Check-out date</label>
                    <input type="date" required>
                </div>
                <div class="form-group">
                    <label>Number of rooms</label>
                    <input type="number" min="1" max="5" value="1" required>
                </div>
                <div class="form-group full-width">
                    <label>Meal plan</label>
                    <div class="checkbox-grid">
                        <label class="checkbox-item"><input type="radio" name="meal" checked> Breakfast only</label>
                        <label class="checkbox-item"><input type="radio" name="meal"> Half board</label>
                        <label class="checkbox-item"><input type="radio" name="meal"> Full board</label>
                    </div>
                </div>
                <div class="form-group full-width">
                    <label>Dietary requirements</label>
                    <select>
                        <option>No preference</option><option>Vegetarian</option><option>Jain</option>
                        <option>Vegan</option><option>Gluten-free</option><option>Other (add in special requests)</option>
                    </select>
                </div>
                <div class="form-group full-width">
                    <label>Select Accommodation</label>
                    <select required>
                        <option value="">Select a suite...</option>
                        <option value="standard">Heritage Courtyard Room</option>
                        <option value="deluxe">Deluxe Rajput Suite</option>
                        <option value="royal">The Maharaja Pavilion</option>
                    </select>
                </div>

                <div class="form-group full-width" style="margin-top: 10px;">
                    <h3 style="font-family: 'Playfair Display', serif; color: var(--primary); margin-bottom: 5px; font-size: 1.2rem;">VIP Enhancements</h3>
                    <div class="checkbox-grid">
                        <label class="checkbox-item"><input type="checkbox"> Vintage Car Airport Transfer</label>
                        <label class="checkbox-item"><input type="checkbox"> Traditional Garland Welcome</label>
                        <label class="checkbox-item"><input type="checkbox"> Private Heritage Guide</label>
                        <label class="checkbox-item"><input type="checkbox"> Royal Ayurvedic Spa Session</label>
                    </div>
                </div>

                <div class="form-group full-width">
                    <label>Special Requests</label>
                    <textarea rows="2" placeholder="Let us know if you are celebrating..."></textarea>
                </div>

                <div class="form-group full-width" style="text-align: center; margin-top: 10px;">
                    <button type="submit" style="width: 100%; padding: 12px; font-size: 1rem;">Confirm Reservation Request</button>
                </div>
            </form>

            <div class="perks-panel">
                <h3 style="font-family: 'Playfair Display', serif; color: var(--primary); font-size: 1.5rem; margin-bottom: 10px;">Why Book Direct?</h3>
                <p style="color: var(--text-muted); margin-bottom: 15px; font-size: 0.9rem; line-height: 1.5;">Reserving directly through our concierge unlocks the true royal treatment.</p>
                <ul>
                    <li><span>✦</span> 24/7 Dedicated Butler Service</li>
                    <li><span>✦</span> Complimentary Breakfast</li>
                    <li><span>✦</span> Priority Access to City Palace</li>
                    <li><span>✦</span> Cultural Evening Invitations</li>
                    <li><span>✦</span> Flexible Cancellations</li>
                </ul>
                <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid var(--border); text-align: center;">
                    <h4 style="font-family: 'Playfair Display', serif; color: var(--gold); margin-bottom: 5px; font-size: 1rem;">Need Assistance?</h4>
                    <p style="color: var(--text-main); font-weight: bold; font-size: 0.9rem;">Call: +91 141 222 3333</p>
                </div>
            </div>
        </div>
    `,
    gallery: () => `
        <span class="overline animate-up" style="text-align: center; animation-delay: 0.1s;">Visual Journey</span>
        <h2 class="page-title animate-up" style="animation-delay: 0.2s;">City Gallery</h2>
        
        <div class="grid-container">
            ${[...heritageSites, ...culturalGallery].map((item, index) => `
                <div class="gallery-img-wrapper animate-up" style="animation-delay: ${(index * 0.03) + 0.3}s" onclick="openLightbox('${item.img}', '${item.name.replace(/'/g, "\\'")}')">
                    <img loading="lazy" src="${item.img}" onerror="this.onerror=null; this.src='${getLocalFallback(item.name)}';" alt="${item.name}">
                    <div class="card-overlay">
                        <div style="width: 100%;">
                            <h3>${item.name}</h3>
                            <span style="display: block; color: var(--gold); font-size: 0.85rem; margin-top: 6px; font-family: 'Cinzel', serif; letter-spacing: 1px;">View Gallery &rarr;</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `
};

function renderDedicatedSitePage(id) {
    const site = heritageSites.find(s => s.id === parseInt(id));
    if(!site) return `<h2>Site not found</h2>`;
    return `
        <div class="dedicated-site">
            <span class="overline animate-up" style="text-align: center; animation-delay: 0.1s;">Monument Details</span>
            <h2 class="page-title animate-up" style="animation-delay: 0.2s;">${site.name}</h2>
            <img src="${site.img}" class="banner-img animate-up" style="animation-delay: 0.3s; height: 300px; width: 100%; object-fit: cover; border-radius: 12px; margin-bottom: 25px; box-shadow: 0 8px 20px var(--shadow);" onerror="this.onerror=null; this.src='${getLocalFallback(site.name)}';" alt="${site.name}">
            
            <div class="animate-up" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; margin-bottom: 25px; animation-delay: 0.4s;">
                <div>
                    <h3 style="font-family: 'Playfair Display', serif; color: var(--primary); font-size: 1.6rem; margin-bottom: 10px;">The Experience</h3>
                    <p class="drop-cap" style="font-size: 0.95rem;">${site.desc}</p>
                    <p style="color: var(--text-muted); line-height: 1.6; margin-top: 10px; font-size: 0.9rem;">Whether you are an architecture enthusiast, a history buff, or a casual traveler, this location promises an unforgettable experience deeply rooted in Rajasthan's regal past.</p>
                    
                    <h3 style="font-family: 'Playfair Display', serif; color: var(--primary); font-size: 1.5rem; margin-bottom: 10px; margin-top: 25px;">Architecture</h3>
                    <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">${site.architecture}</p>
                </div>
                
                <div style="background: var(--surface); padding: 25px; border-radius: 12px; border: 1px solid var(--border); box-shadow: 0 8px 20px var(--shadow); height: fit-content;">
                    <h3 style="font-family: 'Playfair Display', serif; color: var(--primary); font-size: 1.5rem; margin-bottom: 15px; border-bottom: 2px solid var(--gold); padding-bottom: 8px;">Visitor Guide</h3>
                    
                    <div style="margin-bottom: 15px; font-size: 0.95rem;">
                        <strong style="color: var(--gold); display:block; margin-bottom: 3px; font-family:'Cinzel', serif; letter-spacing: 1px;">TIMINGS</strong>
                        <span style="color: var(--text-main); font-size: 0.9rem;">${site.timings}</span>
                    </div>
                    
                    <div style="margin-bottom: 15px; font-size: 0.95rem;">
                        <strong style="color: var(--gold); display:block; margin-bottom: 3px; font-family:'Cinzel', serif; letter-spacing: 1px;">ENTRY FEE</strong>
                        <span style="color: var(--text-main); font-size: 0.9rem;">${site.fee}</span>
                    </div>
                    
                    <div style="margin-top: 25px; padding: 15px; background: rgba(197, 160, 89, 0.1); border-left: 4px solid var(--gold); border-radius: 0 8px 8px 0;">
                        <strong style="color: var(--primary); font-size: 1rem; font-family: 'Playfair Display', serif;">Insider Tip</strong><br>
                        <span style="font-size: 0.9rem; font-style: italic; color: var(--text-muted); line-height: 1.5; display: inline-block; margin-top: 4px;">${site.tip}</span>
                    </div>
                </div>
            </div>

            <div class="animate-up" style="background: linear-gradient(to right, var(--primary), #5a1218); padding: 25px; border-radius: 12px; color: white; margin-bottom: 25px; animation-delay: 0.5s;">
                <h3 style="font-family: 'Playfair Display', serif; color: var(--gold); font-size: 1.3rem; margin-bottom: 8px;">✦ Did You Know?</h3>
                <p style="font-size: 0.95rem; line-height: 1.5; opacity: 0.9;">${site.trivia}</p>
            </div>

            <div class="history-section animate-up" style="animation-delay: 0.6s;">
                <h3 style="font-family: 'Playfair Display', serif; color: var(--primary); font-size: 1.6rem; margin-bottom: 10px;">Historical Significance</h3>
                <p style="margin-bottom: 0; font-size: 0.95rem; color: var(--text-main); line-height: 1.6;">${site.history}</p>
            </div>
            
            <div class="decorative-divider animate-up" style="margin: 25px 0; animation-delay: 0.7s;">✦ ✧ ✦</div>

            <div class="animate-up" style="text-align: center; animation-delay: 0.8s;">
                <h4 style="font-family: 'Cinzel', serif; color: var(--text-muted); margin-bottom: 15px; font-size: 0.85rem;">Continue Your Journey</h4>
                <a href="#heritage" class="btn-primary" style="text-decoration: none; display: inline-block; padding: 10px 20px; background: transparent; color: var(--primary); border: 2px solid var(--primary); box-shadow: none;">&larr; Return to Directory</a>
                <a href="#booking" class="btn-primary" style="text-decoration: none; display: inline-block; padding: 10px 20px; margin-left: 10px;">Book a Guided Tour</a>
            </div>
        </div>
    `;
}

function router() {
    let hash = window.location.hash.replace('#', '') || 'home'; 
    appContainer.classList.remove('fade-in');
    
    setTimeout(() => {
        if (hash.startsWith('site-')) {
            appContainer.innerHTML = renderDedicatedSitePage(hash.split('-')[1]);
        } else if (pages[hash]) {
            appContainer.innerHTML = pages[hash]();
        } else {
            appContainer.innerHTML = `<h2 class="page-title">404 - Page Not Found</h2>`;
        }
        
        appContainer.classList.add('fade-in');
        const today = new Date().toISOString().split('T')[0];
        document.querySelectorAll('.booking-form input[type=date]').forEach(d => d.min = today);
        document.querySelectorAll('.booking-form .form-group').forEach((g, i) => {
            const l = g.querySelector(':scope > label'), f = g.querySelector('input,select,textarea');
            if (l && f && f.type !== 'radio' && f.type !== 'checkbox') { f.id = 'field-' + i; l.htmlFor = f.id; }
        });
        const [ci, co] = document.querySelectorAll('.booking-form input[type=date]');
        if (ci && co) ci.addEventListener('change', () => {
            if (!ci.value) return;
            const n = new Date(ci.value); n.setDate(n.getDate() + 1);
            co.min = n.toISOString().split('T')[0];
            if (co.value && co.value < co.min) co.value = '';
        });
        
        let activeTabLink = hash.startsWith('site-') ? 'heritage' : hash;
        
        document.querySelectorAll('.tab-link').forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === `#${activeTabLink}`) {
                link.classList.add('active');
            }
        });
        
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, 50);
}

const menuToggle = document.getElementById('mobile-menu');
const navTabs = document.getElementById('nav-tabs');

menuToggle.addEventListener('click', () => {
    navTabs.classList.toggle('active');
    menuToggle.classList.toggle('is-active');
});

navTabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-link')) {
        navTabs.classList.remove('active');
        menuToggle.classList.remove('is-active');
    }
});

const themeToggle = document.getElementById('theme-toggle');
let isDarkMode = false;
themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
});

const modal = document.getElementById('custom-modal');
const modalBody = document.getElementById('modal-body');

window.openLightbox = function(imgSrc, title) {
    modalBody.innerHTML = `
        <img src="${imgSrc}" onerror="this.onerror=null; this.src='${fallbackImg(title)}';" alt="${title}" style="box-shadow: 0 8px 25px rgba(0,0,0,0.6);">
        <h3 style="margin-top: 15px; color: var(--gold); font-family: 'Playfair Display', serif; font-size: 1.6rem;">${title}</h3>
    `;
    modal.classList.add('show');
    document.querySelector('.modal-content').style.background = 'transparent';
    document.querySelector('.modal-content').style.boxShadow = 'none';
}

window.closeModal = function() { modal.classList.remove('show'); }
window.onclick = function(event) { if (event.target == modal) closeModal(); }

window.handleBooking = function(event) {
    event.preventDefault();
    const f = event.target, esc = (s) => s.replace(/[&<>"']/g, (c) => '&#' + c.charCodeAt(0) + ';');
    const [d1, d2] = f.querySelectorAll('input[type=date]');
    const nights = Math.max(1, Math.round((new Date(d2.value) - new Date(d1.value)) / 864e5));
    const rows = [['Guest', esc(f.querySelector('input[type=text]').value)], ['Stay', `${d1.value} to ${d2.value} (${nights} night${nights > 1 ? 's' : ''})`], ['Suite', f.querySelector('select').selectedOptions[0].text]]
        .map(([k, v]) => `<div style="display:flex;justify-content:space-between;gap:20px;padding:8px 0;border-bottom:1px solid var(--border);font-size:.95rem;"><span style="color:var(--text-muted)">${k}</span><strong style="text-align:right">${v}</strong></div>`).join('');
    document.querySelector('.modal-content').style.background = 'var(--surface)';
    document.querySelector('.modal-content').style.boxShadow = '0 15px 30px rgba(0,0,0,0.4)';
    
    modalBody.innerHTML = `
        <div style="padding: 20px;">
            <div style="font-size: 3.5rem; margin-bottom: 10px;">💌</div>
            <span class="overline">Request received</span>
            <h2 style="color: var(--primary); font-family: 'Playfair Display', serif; font-size: 2rem; margin-bottom: 10px;">We Await Your Arrival</h2>
            <p style="margin-top: 10px; color: var(--text-muted); font-size: 0.95rem; line-height: 1.5;">Thank you for choosing to stay with us. We have received your reservation request. Our concierge will contact you shortly to confirm availability.</p><div style="margin-top:18px;text-align:left;">${rows}</div>
            <button class="btn-primary" onclick="closeModal(); window.location.hash='#home'" style="margin-top: 20px; padding: 10px 25px;">Return to Home</button>
        </div>
    `;
    modal.classList.add('show');
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
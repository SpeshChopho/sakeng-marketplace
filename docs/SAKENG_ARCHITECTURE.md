# FINAL_SAKENG_ARCHITECTURE
The Blueprint for Building Lesotho’s Trusted Livestock Marketplace  
Version 1.0
Prepared by Sakeng Livestock 
Building technology that strengthens livestock trade through trust, simplicity, and accessibility. 
Preface 
Sakeng was founded on a simple belief:
Livestock trading should be trustworthy, accessible, and simple for everyone.
Across Lesotho, livestock is more than an agricultural product. It represents income, food security, savings, investment, and cultural heritage. Yet despite its importance, buying and selling livestock remains fragmented, informal, and largely dependent on social media, personal networks, and word of mouth.
Sakeng exists to change that.
This document captures the principles that guide every decision made while building Sakeng. It is more than a technical documentation, it is the foundation for how we think about the product, design, and engineering. 
Technology changes quickly, but principles endure.
For that reason, this document focuses less on specific implementation details and more on the reasoning behind our decisions. Every feature, every interface, and every line of code should ultimately support the same mission: building Lesotho’s most trusted livestock marketplace.
Whether you are a founder, designer, developer, or future contributor, this document should provide a shared understanding of what Sakeng is, why it exists, and how it should evolve.

#### Our Promise 
We will always strive to build software that is:
•	Simple before sophisticated.
•	Trustworthy before scalable.
•	Useful before impressive.
•	Designed for Basotho before the rest of the world. 
Technology should adapt to people, not the other way round.

### Preface Summary
This document is the blueprint for Sakeng. It establishes the principles that guide the platform and ensures that every future decision remains aligned with its mission of building a trusted, accessible, and locally relevant livestock marketplace.

## PART I – FOUNDATION
### Chapter 1 - ## Introduction 
Purpose
This ### Chapter introduces Sakeng, explains the role of this document, and establishes the context for the chapters that follow.

## ## Introduction
Sakeng is a mobile-first digital marketplace connecting livestock buyers and sellers across Lesotho. It was created to improve the way livestock is discovered, traded, and trusted by providing a platform that is simple to use, accessible on low-bandwidth connections, and designed specifically for the realities of the Basotho farming community.
The platform does not seek to replace traditional livestock trading overnight. Instead, it enhances existing behavior by providing a trusted digital marketplace where buyers can discover livestock more easily, and sellers can reach a broader audience.
While the initial focus is on enabling livestock listings and facilitating buyer-seller connections, Sakeng is designed with a long-term vision of supporting a stronger livestock ecosystem through better information, greater transparency, and improved market access.

## Why This Document Exists
Building a successful platform requires consistency. As Sakeng grows, new features, technologies, and contributors will naturally be introduced.
Without a shared set of principles, the platform risks becoming inconsistent and difficult to maintain. 
This document serves as the single source of truth for the philosophy, design standards, and engineering principles that define Sakeng. It provides guidance for making decisions today while creating a foundation that can support the platform for many years.

## Who This Document Is For
This document is intended for:
•	Founders and decision makers responsible for the long-term direction of Sakeng.
•	Designers responsible for creating a consistent user experience.
•	Developers implementing and maintaining the platform. 
•	Future contributors who need to understand the principles behind the product before making changes.
Every contributor should understand this document before contributing to the platform.

## Relationship With Other Documents
The Sakeng Architecture is the highest-level document within the project documentation.
It is supported by the following documents:
•	README.md – Project overview and setup instructions.
•	ENGINEERING_PLAYBOOK.md – Development workflow, coding standards, and engineering conventions.
•	DATABASE_SHCEMA.md – Database structure, relationships, and data definitions. 
•	AI_CONTEXT.md – Product context for AI-assisted development.
These documents expand on specific implementation details while remaining aligned with the principles established in this Architecture.

## Chapter Summary
Sakeng is more than a software project, it is a long-term platform designed to strengthen livestock trading in Lesotho. This Architecture provides the shared principles that ensure every product, design, and engineering decision contributes to that vision. 

### Chapter 2 - Mission, Vision & Purpose
Purpose 
This ### Chapter defines the reason Sakeng exists, the future it strives to create, and the purpose that guides every product, design, and engineering decision. Together, these statements form the foundation upon which the platform is built.

#### Our Mission
To build Lesotho’s most trusted livestock marketplace by connecting buyers and sellers through a simple, transparent, and accessible digital platform.
Trust is the foundation of every successful marketplace. Sakeng exists to reduce the uncertainty that surrounds livestock trading by making it easier for people to discover quality livestock, reach a wider market, and trade with greater confidence.
Our mission is not simply to digitize livestock trading. It is to remove friction from the entire buying and selling experience while ensuring that the platform remains accessible to farmers of all backgrounds and levels of digital literacy.
Every feature introduced into Sakeng should contribute toward strengthening trust, improving accessibility, or simplifying the trading experience.

#### Our Vision
To become the digital foundation of livestock trading in Lesotho and, ultimately, a trusted agricultural marketplace that empowers farmers, informs decision-makers, and strengthens the country’s agricultural economy.
While Sakeng begins as a livestock marketplace, our vision extends beyond facilitating transactions.
As adoption grows, the platform has the potential to become an important source of market insight by helping farmers understand demand, improving access to quality livestock, and supporting a more connected agricultural ecosystem.
We envision a future where livestock trading is no longer constrained by geography, limited information, or fragmented communication, but instead supported by trusted technology that benefits farmers, buyers, and the wider agricultural sector.

#### Our Purpose
Sakeng exists because livestock is more than a commodity.
For many Basotho families, livestock represents:
•	Income.
•	Food security.
•	Wealth preservation.
•	Cultural heritage.
•	Opportunity for future generations.
Despite its importance, livestock trading has not benefited from the same level of digital innovation seen in many other industries.
Our purpose is to bridge that gap by building technology that serves people rather than expecting people to adapt to technology.
We believe digital platforms should strengthen existing communities, create new economic opportunities and make everyday tasks simpler without adding unnecessary complexity.

#### Our Long-Term Commitment
As Sakeng grows, our commitment remains unchanged.
We will continue to build a platform that:
•	Prioritizes trust over rapid growth.
•	Solves real problems before introducing new features.
•	Remains simple enough for first-time smartphone users.
•	Supports farmers of every size, from small household producers to commercial operations.
•	Contributes positively to Lesotho’s agricultural ecosystem.
Growth should never come at the expense of the principles that define the platform.

#### Measuring Success
Success will not be measured solely by the number of listings or users on the platform.
We believe Sakeng succeeds when:
•	Farmers can confidently buy and sell livestock without relying solely on informal channels.
•	Buyers spend less time searching for quality livestock.
•	Sellers gain access to a wider and more transparent market.
•	Trust becomes a defining characteristic of livestock trading in Lesotho.
•	The platform creates measurable value for the country’s agricultural sector.
These outcomes are more meaningful than vanity metrics and provide a clearer indication of whether Sakeng is fulfilling its mission.

#### Guiding Statement
Every product decision should answer a simple question:
Does this make livestock trading simpler, more trustworthy, or more accessible?
If the answer is no, the decision should be reconsidered.
This question serves as the guiding filter for the evolution of Sakeng.

#### Chapter Summary
Sakeng exists to build trust in livestock trading through simple and accessible technology. Our mission defines what we do today, our vision describes the future we are working toward, and our purpose ensures that every decision remains focused on creating meaningful value for farmers, buyers, and the agricultural ecosystem of Lesotho.
Sakeng’s North Star
Technology should adapt to people – not the other way around.

### Chapter 3 - The Problem We Are Solving
Purpose
This ### Chapter explains the challenges facing livestock trading in Lesotho and why Sakeng is needed. By understanding these challenges, every future feature and product decision can be evaluated against a real problem rather than assumptions or trends.

## Introduction
Livestock is one of Lesotho’s most important assets.
For many Basotho families, cattle, sheep, goats, pigs and poultry are more than animals—they represent income, savings, food security, education and financial resilience. Livestock supports livelihoods across both rural and urban communities and remains one of the country’s most valuable agricultural resources.
Despite its importance, livestock trading has changed very little over the years.
Most buying and selling still takes place through Facebook groups, WhatsApp messages, personal referrals, local auctions and word of mouth. While these channels have served communities for many years, they were never designed to function as organised livestock marketplaces.
The result is a fragmented trading environment where finding quality livestock, reaching genuine buyers and making informed purchasing decisions can be unnecessarily difficult.

#### The Challenges
1.	 There is no trusted national livestock marketplace.
Lesotho currently lacks a dedicated digital platform where buyers and sellers can confidently trade livestock.
Instead, listings are spread across multiple Facebook groups, WhatsApp conversations and informal networks.
This makes it difficult for buyers to compare options and equally difficult for sellers to reach a wider market.
2.	Discovering quality livestock is difficult.
Farmers often spend considerable time searching for specific breeds, production animals or breeding stock.
In many cases, buyers travel long distances or even cross into South Africa because they cannot easily determine what is available locally.
This increases costs, delays purchasing decisions and limits opportunities for local producers.
3.	Trust is inconsistent.
When purchasing livestock online, buyers frequently have limited information.
Important details such as:
•	Breed
•	Age
•	Purpose
•	Health status
•	Vaccination history
•	Seller credibility
may be missing, inaccurate, or inconsistent.
Without reliable information, buyers are forced to rely on personal judgment and trust rather than transparency.
4.	Small-scale farmers have limited market access.
Many farmers produce excellent livestock but struggle to reach buyers beyond their immediate communities.
Their ability to sell often depends more on personal connections than on the quality of their livestock.
This limits competition and reduces opportunities for farmers to achieve fair market value.
5.	The country lacks meaningful livestock data.
Reliable livestock market information is difficult to obtain.
Questions such as:
•	Which districts have the highest supply of dairy cattle?
•	Which breeds are most commonly traded?
•	What livestock is currently highest in demand?
•	Where are buyers searching from?
are difficult to answer because no central marketplace currently exists to capture this information.
While Sakeng is not intended to replace official agricultural statistics, it has the potential to become a valuable source of marketplace insights that benefit farmers, businesses, and policymakers.
6.	Technology has not been designed around local realities.
Many digital platforms assume:
•	Fast internet.
•	High-end smartphones.
•	Constant connectivity.
•	High digital literacy.
These assumptions do not always reflect the realities of many Basotho farmers.
Technology should remove barriers—not create them.
This is why Sakeng prioritizes:
•	Mobile-first design.
•	Fast page loading.
•	Optimized images.
•	Simple navigation.
•	Minimal data usage.
•	Familiar user experiences.

#### Why Existing Platforms Are Not Enough
Platforms such as Facebook and WhatsApp have enabled many successful livestock transactions.
However, they were never built specifically for livestock trading.
They lack structured listing information, meaningful search filters, verification mechanisms, and tools that help buyers compare livestock confidently.
Rather than replacing these platforms, Sakeng complements existing behavior by providing a purpose-built marketplace designed around the needs of livestock buyers and sellers.

#### Our Opportunity
Sakeng does not aim to change how Basotho trade overnight.
Instead, it improves the existing experience.
By creating a trusted marketplace built specifically for livestock, the platform enables buyers to discover livestock more efficiently while giving sellers greater visibility and access to new markets.
Over time, this creates a stronger, more transparent, and better-connected livestock ecosystem for Lesotho.

#### Looking Ahead
Solving today’s problems creates opportunities for tomorrow.
As the platform grows, Sakeng can expand beyond listings to support additional services such as livestock verification, transport coordination, agricultural financing, market insights, and other tools that strengthen the livestock value chain.
These future opportunities are made possible by first solving the fundamental problem of creating a trusted marketplace.

#### Why Now?
Smartphone adoption is increasing, digital payments are becoming more common, and more Basotho are comfortable using online platforms. The conditions are finally right for a dedicated livestock marketplace to succeed. 

### Chapter Summary
Livestock trading in Lesotho remains fragmented, informal, and difficult to navigate. Buyers struggle to find trusted livestock, sellers have limited market visibility, and meaningful marketplace data is largely unavailable. Sakeng exists to address these challenges through a platform that is simple, transparent, and built specifically for the realities of livestock trading in Lesotho. 

### Chapter 4 - Our Core Principles 
Purpose
This ### Chapter defines the principles that guide every decision made within Sakeng. These principles influence product design, engineering, customer experience, and long-term strategy. They serve as the foundation for evaluating new ideas and ensuring the platform evolves consistently while remaining true to its mission.

## Introduction
Technology changes rapidly, but principles should remain constant.
As Sakeng grows, new opportunities, challenges, and feature requests will naturally emerge. Without a shared set of principles, decisions become inconsistent, and the platform risks becoming unnecessarily complex.
Our Core Principles exist to prevent that.
They provide a common framework for evaluating ideas, resolving trade-offs and ensuring that every improvement contributes positively to the experience of our users.
Whenever uncertainty arises, these principles should guide the decision.

#### Principle 1 — Simplicity Before Complexity
We believe that the best technology feels natural to use.
Every screen, feature, and interaction should be as simple as possible without sacrificing functionality. Complexity should remain behind the scenes, allowing users to focus on their goals rather than learning how to use the platform.
If a feature requires extensive explanation, it should be redesigned before it is released.
In Practice
•	Clear navigation.
•	Minimal user steps.
•	Familiar interface patterns.
•	Plain, easy-to-understand language.

#### Principle 2 — Build for Lesotho First
Sakeng is designed for the realities of Lesotho.
Our decisions begin with the needs of Basotho farmers, buyers, and communities before considering international expansion.
Local relevance will always take priority over following global technology trends.
Only after creating meaningful value locally should the platform expand into neighboring markets.
In Practice
•	Mobile-first design.
•	Low-bandwidth optimisation.
•	Local terminology.
•	District-based search.
•	Features that reflect local livestock practices.

#### Principle 3 — Trust Before Scale
Growth is valuable, but trust is essential.
A marketplace without trust cannot succeed.
Every feature introduced into Sakeng should increase confidence between buyers and sellers through transparency, consistency, and reliable information.
We would rather grow steadily while maintaining trust than grow quickly while compromising quality.
In Practice
•	Structured listings.
•	Seller transparency.
•	Verification where appropriate.
•	Clear livestock information.
•	Honest communication.

#### Principle 4 — Technology Should Adapt to People
Technology exists to serve people—not the other way around.
We do not expect farmers to change how they think simply to use our platform.
Instead, Sakeng should feel familiar, intuitive, and accessible from the first interaction.
Where possible, we improve existing behavior rather than replacing it.

In Practice
•	Fast-loading pages.
•	Optimized images.
•	Simple forms.
•	Familiar user journeys.
•	Progressive improvement rather than radical change.

#### Principle 5 — Performance Is a Feature
Speed is not a technical luxury—it is part of the user experience.
Many users rely on limited mobile data and inconsistent internet connections.
Every optimization improves accessibility and increases the likelihood that users will continue using the platform.
Performance should be considered during design—not after development.
In Practice
•	Compressed images.
•	Smart caching.
•	Efficient database queries.
•	Lightweight pages.
•	Responsive interfaces.

#### Principle 6 — Every Feature Must Earn Its Place
Not every good idea belongs in the MVP.
Features should only be added when they solve a genuine user problem and align with Sakeng’s mission.
Saying “no” to unnecessary complexity is often more valuable than saying “yes” to another feature.
Decision Test
•	Before implementing a feature, ask:
•	Does it solve a real problem?
•	Does it support our mission?
•	Can users understand it immediately?
•	Is it appropriate for the current stage of the platform?
If the answer is “no” to any of these, the feature should be reconsidered or added to the future roadmap.

#### Principle 7 — Build for the Long Term
Quick solutions should never create long-term problems.
Whether designing the interface, structuring the database, or writing code, decisions should favor maintainability, scalability, and clarity.
Every improvement should make Sakeng easier to grow—not harder to maintain.
In Practice
•	Reusable components.
•	Clean architecture.
•	Consistent documentation.
•	Well-defined standards.
•	Scalable database design.

#### Principle 8 — Continuous Improvement
Version 1.0 is not the finish line.
Sakeng will improve through observation, feedback, and learning.
We recognize that the first solution is rarely the perfect solution.
Every release provides an opportunity to refine the platform while remaining true to its principles.
Progress should be deliberate, measured, and driven by real user needs.

#### Our Decision Filter
Whenever a significant product or engineering decision is made, we ask five questions:
1. Does it make Sakeng simpler?
2. Does it strengthen trust?
3. Does it solve a real problem?
4. Does it improve the experience for Basotho users?
5. Is it consistent with our long-term vision?
If the answer to any of these questions is no, the decision should be reconsidered.
This filter helps ensure that Sakeng evolves with purpose rather than reacting to every new trend or feature request.

### Chapter Summary
Sakeng’s Core Principles define how we think, build, and make decisions. They ensure that every improvement remains aligned with our mission, our users, and our long-term vision. By consistently applying these principles, Sakeng can grow without losing the simplicity, trust, and local relevance that make the platform valuable.

## PART II – PRODUCT
Purpose of ## PART II
This section defines how Sakeng is designed as a product. It establishes the philosophies that shape the user experience, the organization of information, and the visual language of the platform. Every interface, interaction, and feature should reflect the principles outlined in this section, ensuring that Sakeng remains intuitive, consistent, and focused on solving real problems for its users.

### Chapter 5 - Product Philosophy 
Purpose
This ### Chapter defines the philosophy behind Sakeng’s product design. Rather than focusing on individual features, it explains the thinking that guides how the platform should evolve. Every product decision should contribute to a marketplace that is simple, trustworthy, accessible and built around the realities of livestock trading in Lesotho.

## Introduction
A successful product is not defined by the number of features it offers, but by how effectively it solves real problems.
At Sakeng, we believe that technology should simplify people’s lives rather than introduce unnecessary complexity. Every screen, interaction and workflow should exist for a reason and should make livestock trading easier, faster or more trustworthy.
Our philosophy is to build a product that farmers understand instinctively, even if they have never used a livestock marketplace before.
This ### Chapter establishes the principles that guide every product decision, from the smallest interface detail to the long-term evolution of the platform.
1.	Start Where People Are
Technology is adopted more easily when it builds upon familiar behavior.
Basotho already buy and sell livestock through Facebook, WhatsApp, local markets and personal networks. Rather than expecting users to abandon these habits overnight, Sakeng improves the experience by providing a platform specifically designed for livestock trading.
Our goal is evolution, not disruption.
Product Implications
•	Familiar navigation.
•	Simple listing process.
•	Straightforward search.
•	Easy seller communication.
•	Minimal learning curve.

2.	Build for Lesotho First
Every product decision begins with one question:
Does this make sense for Basotho farmers?
The answer to that question is more important than whether a feature is fashionable or commonly used elsewhere.
Designing for Lesotho means recognizing local realities, including internet connectivity, mobile device limitations, language preferences, and farming practices.
Only after creating a successful solution locally should Sakeng consider expansion into neighboring markets.
3.	Simplicity Wins
Simple products earn trust.
Every additional button, filter or workflow increases cognitive load.
For this reason, every feature introduced into Sakeng must justify its existence.
The platform should always strive to reduce effort rather than increase functionality for its own sake.
When faced with two solutions, the simpler solution should generally be preferred.
4.	Every Feature Must Solve a Real Problem
Ideas are not features.
Problems deserve solutions.
Before implementing any feature, we ask:
•	What problem does this solve?
•	Who benefits?
•	Is there evidence that users need it?
•	Is it appropriate for the current stage of the product?
If these questions cannot be answered confidently, the feature belongs in the backlog rather than the MVP.
5.	Trust Is Designed
Trust is not created by a single verification badge.
It is the result of hundreds of thoughtful design decisions.
Trust is strengthened through:
•	Clear listing information.
•	Consistent data.
•	Transparent seller profiles.
•	Honest communication.
•	High-quality images.
•	Reliable platform performance.
Every screen should reinforce confidence.
6.	Performance Is Part of the User Experience
Fast software feels trustworthy.
Many Sakeng users will access the platform using limited mobile data and inconsistent network connections.
Performance is therefore considered a product feature rather than purely an engineering concern.
The product should:
•	Load quickly.
•	Consume minimal data.
•	Display responsive interfaces.
•	Optimize images automatically.
•	Cache content intelligently where appropriate.
Users should spend time browsing livestock—not waiting for pages to load.
7.	Design for Mobile First
The majority of Sakeng users will experience the platform through a smartphone.
Design decisions should therefore begin with the mobile experience before expanding to larger screens.
Desktop layouts should enhance the experience rather than redefine it.
Every interface should feel natural when used with one hand on a mobile device.
8.	Consistency Builds Confidence
Users should never have to relearn the interface.
Buttons should behave consistently.
Cards should follow the same structure.
Typography should remain predictable.
Navigation should be familiar.
Consistency reduces mental effort and creates confidence throughout the platform.
9.	Grow Deliberately
Not every opportunity should become a feature.
The marketplace should first excel at connecting buyers and sellers before expanding into additional services such as logistics, financing or analytics.
Growth should always follow demonstrated user needs rather than assumptions.
A focused product is stronger than a feature-rich product that tries to solve everything.

#### Our Product Decision Framework
Before approving a new feature, we ask:
•	Does it solve a genuine problem?
•	Does it simplify the user experience?
•	Does it strengthen trust?
•	Does it support our mission?
•	Is it necessary for the current stage of the platform?
Only when these questions are answered positively should development proceed.

### Chapter Summary
Sakeng’s product philosophy is centred on solving real problems through simple, trustworthy and locally relevant design. Every feature should earn its place, every interaction should reduce friction, and every product decision should strengthen the experience for farmers and buyers across Lesotho.

Sakeng doesn’t compete by having the most features. It competes by being the simplest and most trustworthy place to trade livestock.

### Chapter 6 - Information Architecture 
Purpose
This ### Chapter defines how information is organized throughout Sakeng. A well-designed information architecture enables users to navigate the platform intuitively, discover livestock efficiently, and complete tasks with minimal effort. Every page, navigation element, and workflow should contribute to a simple, predictable, and consistent user experience.

## Introduction
The purpose of Sakeng is not to present information — it is to help users accomplish tasks.
Whether a user wants to buy livestock, sell livestock, or simply explore the marketplace, the journey should feel natural from beginning to end.
Information Architecture is therefore built around user goals, not technical structures.
Every screen should answer one question:
What is the user trying to achieve right now?

#### Our Navigation Philosophy
Navigation should never overwhelm users.
Rather than exposing every possible feature, Sakeng guides users through a small number of clear pathways.
The platform should feel familiar from the first interaction.
Navigation should remain:
•	Simple
•	Predictable
•	Consistent
•	Mobile-first
•	Easy to scan
Users should never wonder where to go next.
#### Primary User Goals
Every feature on Sakeng supports one of five primary goals.
1.	Browse Livestock
Users explore available livestock using categories, filters, and search.
2.	Find Specific Livestock
Users refine results using structured filters such as:
•	Category
•	Purpose
•	Breed
•	Type
•	District
•	Price
Filters should progressively reduce results without overwhelming users.
3.	View Listing Details
Users inspect an individual listing before contacting the seller.
Listing pages provide:
•	Images
•	Price
•	Breed
•	Type
•	Purpose
•	Age
•	Sex
•	District
•	Description
•	Seller information
•	Verification status (where applicable)
The Listing Details page should answer as many buyer questions as possible before contact is made.
4.	Sell Livestock
Listing livestock should be fast and straightforward.
The selling flow should guide users step by step while ensuring consistent data quality.
Only information that improves buyer confidence should be collected.
5.	Manage Listings
Authenticated users should have access to a dashboard where they can:
•	View active listings
•	Edit listings
•	Mark listings as Sold
•	Mark listings as Reserved
•	Remove listings
•	Monitor listing performance (future enhancement)

#### Page Hierarchy
The platform follows a shallow hierarchy to minimize navigation depth.
Homepage 
•	Browse Livestock
o	Cattle 
o	Sheep
o	Goats
o	Pigs
o	Poultry
•	Listing Details
•	Sell Livestock
•	User Dashboard
•	Authentication 
Users should rarely need more than three taps to reach their destination.

#### Homepage Philosophy
The Homepage introduces the marketplace.
Its purpose is to encourage exploration rather than present every available feature.
Primary actions:
•	Browse Livestock
•	Sell Livestock
•	Request Livestock
Supporting content:
•	Featured Listings
•	Categories
•	Why Sakeng
•	Trust indicators
•	Footer
The homepage should remain lightweight and load quickly.

#### Browse Listings Philosophy
The Browse Listings page is the heart of the marketplace.
Its purpose is to help users move from exploration to decision-making.
The page consists of:
Header
Search and page title.
Filters
Desktop:
* Left sidebar
Mobile:
* Collapsible filter drawer
Filters should never dominate the page—they should support browsing.

#### Listings Grid
Cards are the primary browsing unit.
Consistency is essential.

#### Pagination
Results should load efficiently while maintaining performance.

#### Listing Card Philosophy
The Listing Card is one of the most important components in Sakeng.
It should communicate the most important information at a glance.
Every listing card should answer four questions:
1.	What is it?
2.	Where is it?
3.	How much does it cost?
4.	Is it available?

#### Our final card structure:
•	Image
•	Availability badge (Available / Reserved / Sold)
•	Verification badge (where applicable)
•	Breed + Type
•	District
•	Price
•	Key attributes (Age, Sex, Purpose where appropriate)
•	View Details CTA
The design should prioritize readability over information density.

#### Search Philosophy
Search should help users narrow choices rather than require perfect input.
Users should be able to begin broadly and progressively refine results.
Search begins with:
Category
↓
Purpose
↓
Breed
↓
Type
↓
Additional Filters
This approach balances flexibility with simplicity.

#### Filter Philosophy
Filters should reduce decision fatigue.
Only filters that significantly improve search quality should be displayed.
Core filters include:
•	Category
•	Purpose
•	Breed
•	Type
•	District
•	Price Range
Advanced filters may be introduced in future versions based on user demand.
#### Dashboard Philosophy
The Dashboard exists to help sellers manage their marketplace activity efficiently.
It should focus on actions rather than analytics.
Core functions:
•	My Listings
•	Add Listing
•	Edit Listing
•	Listing Status
•	Profile Management
#### Future versions may include:
•	Listing views
•	Buyer enquiries
•	Marketplace insights

#### Future Information Architecture
As Sakeng evolves, additional sections may be introduced:
•	Livestock Requests
•	Verified Livestock
•	Educational Resources
•	Transport Services
•	Marketplace Insights
•	Financing Partners
These should integrate naturally into the existing navigation without disrupting the simplicity of the platform.

#### Information Architecture Principles
Every page should satisfy these principles:
•	One clear primary purpose.
•	Simple navigation.
•	Minimal cognitive load.
•	Consistent layouts.
•	Mobile-first interaction.
•	Fast access to key actions.
If a page attempts to accomplish too many objectives, it should be redesigned.

### Chapter Summary
Sakeng’s Information Architecture is designed around user goals rather than technical complexity. Every page, workflow, and navigation element exists to help users buy and sell livestock with confidence while keeping the experience intuitive, predictable, and efficient.





### Chapter 7 - Design System 
Purpose
This ### Chapter establishes the visual language of Sakeng. It defines the design principles, colours, typography, spacing and reusable components that create a consistent experience across the platform.
A consistent design system reduces complexity, strengthens trust and ensures every part of the product feels familiar to users.

## Introduction
Good design is not decoration.
Good design removes friction.
Every visual decision in Sakeng should improve clarity, reinforce trust, and help users accomplish their goals with minimal effort.
Rather than chasing design trends, Sakeng adopts a timeless and understated visual style that reflects the reliability and professionalism expected of a trusted livestock marketplace.
The Design System serves as the single source of truth for all visual decisions.

#### Our Design Philosophy
The Sakeng interface should feel:
•	Calm.
•	Clean.
•	Trustworthy.
•	Professional.
•	Approachable.
Users should focus on livestock—not the interface.
The design should support the content rather than compete with it.
Every screen should communicate confidence through consistency and simplicity.

#### Color Philosophy
Colors are used intentionally.
Every color communicates meaning rather than simply adding visual interest.
The interface uses a restrained palette built around the Sakeng brand while maintaining excellent readability and accessibility.

#### Official Color Palette
Background
Application Background
#F8F6F2
A warm off-white that creates a softer, more welcoming experience than pure white while reducing eye fatigue.
Surfaces
Cards
#FFFFFF
Cards should appear to float above the background through spacing and subtle shadows rather than strong borders.
Header
#FFFFFF
Footer
#FFFFFF

#### Brand Colors
Brand Green
#20352E
Purpose
Used to communicate identity and trust.
Applications include:
•	Headings
•	Logo
•	Icons
•	Navigation highlights
•	Premium CTAs (Sell Livestock and Request Livestock)
Brand Green represents the Sakeng identity and should be used selectively to maintain its visual impact.
Action Green
#3D7A5E
Purpose
The primary interactive color across the application.
Applications include:
•	Standard buttons
•	Links
•	Interactive controls
•	Active states
•	Primary actions
This color provides better visibility and contrast while keeping the interface approachable.
Hover State
#285F44
Used for interactive hover and pressed states.
Yellow Accent
#E5AA27
Reserved for trust-related elements.
Applications include:
•	Sakeng Verified badge
•	Verification indicators
•	Important highlights
•	Trust messaging
Yellow should never be overused.
Its value comes from its association with trust.

#### Typography Colors
Headings
#20352E
Strong, confident, and aligned with the brand identity.
Price
#20352E
Pricing is one of the most important pieces of information on a listing card and should stand out clearly.
Body Text
#3F564C
Readable without appearing overly dark.
Provides a softer reading experience than black while maintaining excellent contrast.
Secondary Text
#6D8077
Used for supporting information such as:
•	Location
•	Metadata
•	Time
•	Supporting labels
#### Borders
#E5E7EB
Borders should be subtle.
Spacing should create hierarchy before borders do.
#### Typography
Sakeng uses Google Inter as its primary typeface.
Inter was selected because it is:
•	Highly readable.
•	Optimized for digital interfaces.
•	Modern yet timeless.
•	Excellent on both mobile and desktop.

#### Typography Hierarchy
Headings should create a clear visual hierarchy while remaining consistent throughout the application.
General guidance:
•	Large page titles for primary screens.
•	Medium headings for sections.
•	Comfortable body text for long-form reading.
•	Smaller secondary text only for supporting information.
Readability always takes precedence over fitting more content onto the screen.

#### Layout Philosophy
Whitespace is a design tool.
The interface should never feel crowded.
Every screen should maintain generous spacing between sections, cards, and interactive elements.
Consistency in spacing improves readability and creates a calmer user experience.

#### Card Philosophy
Cards are the primary building block of the Sakeng interface.
Every card should:
•	Have a white background.
•	Use consistent corner radius.
•	Maintain consistent internal spacing.
•	Present information in a predictable order.
•	Prioritize readability.
Cards should appear to float naturally above the background.

#### Button Philosophy
Buttons communicate priority.
Not every button deserves equal visual weight.
Brand Green Buttons
Reserved exclusively for high-value actions:
•	Sell Livestock
•	Request Livestock
These actions represent the core objectives of the marketplace and therefore deserve the strongest visual emphasis.
Action Green Buttons
Used for all standard actions, including:
•	View Details
•	Save Changes
•	Contact Seller
•	Apply Filters
•	Continue
This creates consistency while preserving the significance of Brand Green.

#### Iconography
Sakeng uses Lucide React icons.
Icons should:
•	Support text rather than replace it.
•	Remain simple and recognizable.
•	Be consistent throughout the application.
Decorative icons should be avoided.
Every icon should serve a functional purpose.

#### Imagery
Images are central to livestock trading.
Every listing should encourage sellers to upload clear, high-quality photographs.
Before storage:
•	Images should be compressed.
•	File sizes should be optimized.
•	Appropriate dimensions should be generated automatically.
This reduces data usage while improving loading performance.

#### Accessibility
Every visual decision should support accessibility.
The platform should:
•	Maintain sufficient color contrast.
•	Use readable font sizes.
•	Provide large touch targets.
•	Avoid relying solely on color to communicate meaning.
•	Remain usable in bright outdoor environments.
Accessibility benefits every user.

#### Design Consistency
Consistency builds confidence.
Every new screen should look as though it has always been part of Sakeng.

#### When introducing new components, designers should ask:
•	Does it match the existing visual language?
•	Does it simplify the interface?
•	Does it reinforce trust?
•	Would a first-time user immediately understand it?
If the answer is no, the design should be reconsidered.

#### Color Pallet Summary 
#### Brand Identity Palette
Color 		Hex 		Purpose
Brand Green 	#20353E 	Primary brand color. Used for the logo, headings, premium CTAs, and brand identity.
Accent Yellow 	#E5AA27 	Represents trust, quality, and verification. Used sparingly for Verified Badges, and trust indicators.
Brand Cream 	#ECDEC2 	Reserved for marketing surfaces, promotional sections, and supporting backgrounds. It should not be used as a primary UI color.
Brown #914124
Navy #1C243A

#### Application UI Palette
Color 		Hex 			Purpose
Background 	#F8F6F2  		Default application background.
Surface 	#FFFFFF  		Cards, Header, Footer, Modals. 
Action Green 	#3D7A5E  		Primary interactive color for buttons and controls.
Hover 		#285F44 		 Hover and pressed states.
Borders	#E5E7EB 		 Dividers and component borders.


#### Typography Palette
Element 		Hex
Headings 		#20352E
Prices 			 #20352E
Body Text 		#3F564C
Secondary Text 	#6D8077

### Chapter Summary
The Sakeng Design System provides consistent visual language that reinforces trust, simplicity, and usability. By applying these standards consistently, every part of the platform contributes to a familiar, accessible, and professional experience that reflects the values of the Sakeng brand.

## PART III – ENGINEERING 
Purpose 
This section defines the engineering standards and technical philosophy that guide the development of Sakeng. It establishes how the platform should be built, maintained, and evolved to ensure consistency, performance, and long-term scalability. While technologies may change over time, the engineering principles described here should remain stable and continue to guide future development.

### Chapter 8 - Engineering Principles 
Purpose
This ### Chapter establishes the engineering principles that guide the development of Sakeng. These principles ensure the platform remains maintainable, scalable, secure, and performant while delivering consistent experience for users. Every line of code should contribute to a platform that is easy to understand, easy to maintain, and built for long-term growth.

## Introduction
#### Engineering is about more than writing code.
Good engineering creates software that is reliable, understandable, and adaptable. It enables teams to move quickly without sacrificing quality and ensures that today’s decisions do not become tomorrow’s technical debt.
At Sakeng, we favor clarity over cleverness. Our code should be readable, predictable, and built with the expectation that it will be maintained for many years.
The engineering principles in this ### Chapter apply to every feature, every component, and every future contributor.
1.	Simplicity Before Cleverness
The best solution is often the simplest one.
Code should be easy to read and understand, even for someone who did not write it. Avoid unnecessary abstractions, overly complex logic or “clever” implementations that make future maintenance difficult.
We optimize for clarity rather than impressiveness.
In Practice
•	Prefer readable code over short code.
•	Avoid unnecessary complexity.
•	Break large functions into smaller, focused functions.
•	Choose explicit naming over abbreviations.

2.	Build Reusable Components
Every reusable pattern should become a reusable component.
Rather than copying code across multiple pages, common functionality should be encapsulated into well-designed components that can be reused throughout the application.
This improves consistency, reduces maintenance effort and makes future enhancements easier.
In Practice
•	Shared buttons.
•	Shared listing cards.
•	Shared forms.
•	Shared modal components.
•	Shared loading states.

3.	One Responsibility Per Component
Each component should have a single, well-defined purpose.
Components that attempt to do too much become difficult to understand, test, and maintain.
Small, focused components are easier to reuse and evolve.
4.	Performance Is a Feature
Performance is not an optimization phase—it is part of the product.
Many Sakeng users rely on affordable smartphones and limited mobile data. Engineering decisions should therefore prioritize fast loading times, efficient rendering and minimal network usage.
Performance should be considered from the first line of code.
In Practice
•	Compress images before upload.
•	Optimize image delivery.
•	Cache data intelligently.
•	Minimize unnecessary database requests.
•	Load only what the user needs.

5.	Security by Default
Security should be built into the platform rather than added later.
Every feature should assume that user data deserves protection.
Sensitive operations must always be validated and authorized.
Trust is strengthened when security is invisible yet dependable.
In Practice
•	Row Level Security (RLS) on every table.
•	Server-side validation.
•	Principle of least privilege.
•	Secure authentication.
•	Safe handling of user uploads.

6.	The Database Is the Source of Truth
Business rules should live as close to the data as practical.
The database should maintain integrity through appropriate constraints, relationships and validation.
Applications may evolve, but the underlying data should remain consistent and reliable.
7.	Document Decisions
Code explains how something works.
Documentation explains why it exists.
Important architectural decisions should always be documented so future contributors understand the reasoning behind them.
Good documentation reduces repeated discussions and prevents inconsistent implementations.
8.	Optimize for Maintainability
Every engineering decision should make the platform easier to maintain.
The ability to improve Sakeng quickly is more valuable than introducing unnecessary technical sophistication.
Future contributors should be able to understand the codebase without extensive explanation.
9.	Build for Growth
Sakeng is launching as an MVP, but every major architectural decision should support future expansion.
Growth should not require rebuilding the platform.
Instead, the architecture should allow new features to be introduced incrementally while preserving the stability of the existing system.
Examples include:
•	Modular application structure.
•	Well-defined database relationships.
•	Reusable UI components.
•	Consistent API design.

10.	Technology Serves the Product
Technology is a tool—not the objective.
We choose technologies because they solve problems effectively, not because they are fashionable.
Engineering decisions should always support the product philosophy established earlier in this document.
When evaluating new technologies, we ask:
•	Does it improve maintainability?
•	Does it improve developer productivity?
•	Does it improve user experience?
•	Does it align with our long-term architecture?
If not, it should not be adopted.

#### Engineering Commandments
Every contributor to Sakeng should remember these principles:
1.	Keep it simple.
2.	Write code for humans first.
3.	Build reusable components.
4.	Never duplicate business logic.
5.	Performance is a feature.
6.	Security is non-negotiable.
7.	Document important decisions.
8.	Build for the next developer.
9.	Let the database protect the data.
10.	Technology should serve the product.


What This Means in Practice
The engineering principles described above influence every implementation decision.
For Sakeng, this means:
•	Images are compressed before they reach Supabase Storage.
•	Static and frequently accessed content is cached using Next.js.
•	Components are designed to be reusable rather than duplicated.
•	Every database table is protected with Row Level Security.
•	User inputs are validated on both the client and server.
•	Business logic is documented before becoming complex.
•	Features are released only after they meet our quality standards.
•	The codebase remains organized, predictable, and easy to navigate.

### Chapter Summary
Engineering at Sakeng is guided by simplicity, maintainability, security, and performance. Rather than pursuing complexity, we focus on building software that is reliable, understandable, and capable of supporting the platform’s long-term vision. Every technical decision should ultimately improve the experience of the farmers, buyers, and sellers who depend on the platform.

### Chapter 9 - Data Philosophy 
Purpose
This ### Chapter defines how Sakeng views, structures, and protects data. Data is one of the platform’s most valuable assets, and every decision regarding its collection, storage, and use should reinforce trust, accuracy, and long-term value.
The goal is not to collect the most data, but to collect the right data in a responsible and consistent manner.




## Introduction
Every livestock listing, seller profile, and marketplace interaction contributes to a growing body of knowledge.
When organized correctly, this information improves search, strengthens trust, and creates valuable insights for farmers, buyers, and the wider agricultural ecosystem.
Poorly managed data creates confusion.
Well-managed data creates confidence.
For this reason, Sakeng treats data as a long-term strategic asset rather than simply information stored in a database.

1.	Collect Only What Creates Value
Every piece of information requested from a user should have a clear purpose.
We avoid collecting unnecessary data simply because it may be useful in the future.
Each field should answer one question:
Does this improve the buying, selling, or management experience?
If not, it should not be collected.
Examples
•	Breed improves search.
•	District improves discovery.
•	Price supports buyer decisions.
•	Photos increase buyer confidence.
Fields that do not improve the experience should be avoided.
2.	Structured Data Before Free Text
Where possible, information should be standardized.
Structured data improves:
•	Search accuracy.
•	Filtering.
•	Reporting.
•	Marketplace insights.
•	Data consistency.
Dropdowns, enums, and predefined options should be preferred over free-text input whenever practical.
This is why Sakeng defines Categories, Purposes, Breeds, and Types rather than allowing every seller to enter their own terminology.
3.	Data Integrity Is Essential
Accurate data builds trust.
The platform should actively prevent inconsistent or invalid information from entering the database.
Integrity should be enforced through:
•	Required fields.
•	Validation rules.
•	Database constraints.
•	Logical relationships between entities.
Reliable data benefits every user of the platform.
4.	The Database Is the Single Source of Truth
Business information should exist in one authoritative location.
The application should display and interact with data, but the database remains the definitive source of truth.
This prevents inconsistencies between different parts of the platform and ensures that every user sees the same information.
5.	Data Should Be Easy to Discover
Collecting information is only valuable if users can find it.
The platform should organize listings using meaningful categories and structured filters that allow buyers to locate livestock quickly.
Every important attribute should contribute to discoverability.
For example:
•	Category
•	Breed
•	Purpose
•	Type
•	District
•	Price
•	Availability
These attributes enable users to move from broad exploration to precise results.
6.	Data Should Support Better Decisions
The primary purpose of Sakeng’s data is to help people make informed decisions.
Buyers should have sufficient information to evaluate livestock before contacting the seller.
Sellers should present their livestock consistently and professionally.
Over time, aggregated marketplace data may also help identify broader trends, provided it is presented responsibly and without compromising individual privacy.
7.	Privacy and Ownership
Users remain the owners of the information they provide.
Sakeng is responsible for storing and processing that information securely and transparently.
Personal information should only be collected where necessary and handled in accordance with applicable privacy laws and best practices.
Marketplace insights should rely on aggregated and anonymized data wherever possible.
8.	Data Should Grow With the Platform
The data model should support future expansion without requiring major redesign.
As Sakeng evolves, additional information such as livestock health records, transport logistics, or certification details may be introduced.
The database should be flexible enough to accommodate these additions while preserving existing data and relationships.
9.	Data Enables Insight
Beyond supporting daily transactions, Sakeng has the opportunity to improve understanding of Lesotho’s livestock sector.
Over time, marketplace data may provide insights such as:
•	Popular livestock categories.
•	Seasonal demand trends.
•	Regional supply patterns.
•	Pricing trends.
•	Buyer search behavior.
These insights can help guide farmers, businesses, and future product improvements.
Data should always be used responsibly and ethically.
#### Data Principles
Every data-related decision should follow these principles:
•	Collect only what creates value.
•	Prefer structured data over free text.
•	Protect data by default.
•	Maintain consistency across the platform.
•	Design for future growth.
•	Respect user privacy.
•	Let data improve decision-making.
What This Means in Practice
These principles influence the implementation of Sakeng in several ways:
•	Livestock categories, breeds, purposes, and types are managed through controlled reference tables rather than hardcoded values.
•	Search filters are powered by structured attributes, ensuring fast and consistent results.
•	Images, seller information, and listing metadata are linked through clear relationships rather than duplicated across tables.
•	Every listing has a lifecycle (Available, Reserved, Sold) to accurately reflect marketplace activity.
•	Database constraints, foreign keys, and Row Level Security help maintain data quality and security.
•	Future features can extend the existing schema without disrupting the integrity of current data.

### Chapter Summary
Sakeng views data as a strategic asset that strengthens trust, improves discoverability, and supports better decision-making. By collecting meaningful, structured, and reliable information, the platform creates value not only for today’s users but also for the future growth of Lesotho’s livestock ecosystem.

### Chapter 10 - AI Development Philosophy
Purpose
This ### Chapter defines how Artificial Intelligence is used throughout the development of Sakeng. AI is regarded as a productivity tool that accelerates design, development, and documentation, while human judgment remains responsible for product direction, architectural decisions, and quality assurance.
The objective is to use AI to build better software more efficiently—not to replace thoughtful engineering.

## Introduction
Software development is changing.
Modern AI tools can generate code, explain concepts, review implementations, and accelerate documentation. Used effectively, they enable smaller teams to achieve significantly more than was previously possible.
At Sakeng, AI is embraced as a development partner rather than an autonomous developer.
It assists with implementation, but it does not replace human responsibility.
Every decision that affects users, architecture, or long-term maintainability should ultimately be reviewed and approved by a human.
1.	AI Assists, Humans Decide
AI is an assistant.
It does not define the product vision.
The mission, architecture, user experience, and long-term direction of Sakeng are human decisions.
AI contributes ideas, generates implementations, and accelerates repetitive work, but responsibility always remains with the development team.
2.	Architecture Before Code
AI produces better results when guided by clear architecture.
For this reason, Sakeng prioritizes documentation before implementation.
Documents such as:
•	Architecture
•	Design System
•	Database Schema
•	Engineering Playbook
•	AI Context
Provide AI with the context needed to generate consistent, production-ready code.
Good documentation produces better AI.
3.	AI Should Follow Established Standards
AI-generated code must comply with Sakeng’s engineering principles.
Generated code should:
•	Follow the Design System.
•	Reuse existing components.
•	Respect database conventions.
•	Maintain naming consistency.
•	Support long-term maintainability.
AI should adapt to Sakeng—not Sakeng to AI.
4.	Every AI Contribution Is Reviewed
No AI-generated code should be accepted without review.
Every implementation should be evaluated for:
•	Correctness.
•	Performance.
•	Security.
•	Readability.
•	Consistency.
•	Maintainability.
Human review remains an essential part of the development process.
5.	AI Should Eliminate Repetitive Work
AI provides the greatest value when reducing repetitive tasks.
Examples include:
•	Component scaffolding.
•	CRUD operations.
•	Documentation.
•	Refactoring suggestions.
•	Unit test generation.
•	SQL generation.
•	Type definitions.
This allows developers to spend more time solving product problems rather than writing boilerplate code.
6.	AI Should Never Replace Product Thinking
AI can suggest features.
Only users determine whether those features are valuable.
Product decisions should always be driven by:
•	User research.
•	Real-world feedback.
•	Marketplace needs.
•	Business objectives.
Features should never be implemented simply because AI suggested them.
7.	Documentation Improves AI
Well-documented projects produce better AI output.
As Sakeng evolves, documentation should remain current so that AI assistants understand:
•	Product philosophy.
•	Component structure.
•	Database relationships.
•	Design standards.
•	Engineering conventions.
Documentation is an investment in future productivity.
8.	AI Is Part of the Team
AI should be viewed as another engineering tool.
Just as developers use Git, GitHub and Supabase, they should also leverage AI responsibly to improve quality and efficiency.
The goal is collaboration.
Not dependence.
#### Responsible AI Principles
Every AI-assisted contribution should satisfy the following principles:
•	Human-reviewed.
•	Secure.
•	Maintainable.
•	Well-documented.
•	Consistent with Sakeng standards.
•	Focused on solving real user problems.
What This Means in Practice
These principles influence Sakeng’s development workflow in several ways:
•	AI generates code from documented requirements rather than vague prompts.
•	Developers provide AI with the Architecture, Design System and Database Schema before requesting implementations.
•	All generated code is reviewed, tested and refined before production.
•	AI is used to accelerate repetitive engineering tasks while humans focus on product strategy, user experience and architectural decisions.
•	Documentation evolves alongside the codebase, ensuring future AI tools continue to generate accurate and consistent implementations.


### Chapter Summary
Sakeng embraces AI as a powerful development partner while maintaining human ownership of product vision, architecture and quality. By combining strong documentation with responsible AI usage, the platform can be developed more efficiently without compromising consistency, security or maintainability.

## Engineering Manifesto (ENGINEERING _MANIFESTO.md)
## The Sakeng Engineering Manifesto
Purpose
The Sakeng Engineering Manifesto defines the beliefs that shape how we build software. These statements serve as guiding principles for every contributor, ensuring that technical decisions remain aligned with our mission of creating a trusted, simple, and accessible livestock marketplace for Lesotho.
1.	We Build for People First
Every line of code should make life easier for farmers, buyers, and sellers.
Technology exists to serve people—not the other way around.
2.	Simplicity Is Our Competitive Advantage
We believe the best products are the easiest to understand.
If something can be made simpler without losing value, it should be.
3.	Trust Is Earned Through Every Detail
Trust is not created by a single feature.
It is built through reliable software, honest information, consistent design, and secure systems.
Every decision should strengthen user confidence.
4.	Build Once. Reuse Everywhere.
Reusable components, shared patterns, and consistent standards make the platform stronger.
We avoid duplication and favor maintainable solutions.
5.	Performance Is a Promise
Every second saved is a better experience for our users.
We optimize for speed, efficient data usage, and responsiveness because we respect our users’ time, devices, and internet costs.
6.	Solve Problems, Not Trends
We do not build features because they are fashionable.
We build them because they solve meaningful problems for the people who depend on Sakeng.
7.	Documentation Is Part of the Product
If knowledge exists only in someone’s memory, it is not part of the platform.
We document important decisions so that future contributors understand not only how something works, but why it exists.
8.	AI Makes Us Faster. Responsibility Makes Us Better.
We embrace AI as a powerful engineering partner, but accountability always remains with people.
Every AI-assisted contribution is reviewed, understood, and improved before it reaches production.
9.	Build Today With Tomorrow in Mind
Every decision should leave the platform easier to extend than it was before.
We favor maintainability, scalability, and clarity over short-term convenience.
10.	 Leave Sakeng Better Than You Found It
Every contribution, whether large or small, should improve the platform.
If you touch a component, leave it cleaner.
If you update documentation, leave it clearer.
If you solve a problem, leave a better path for the next contributor.
Continuous improvement is everyone’s responsibility.

Closing Statement
Sakeng is more than software. It is infrastructure for trust, opportunity, and agricultural growth in Lesotho. Every decision we make should move us closer to that vision.   

## PART IV – GOVERNANCE 
### Chapter 11 - Governance & Decision Making 
Purpose
This ### Chapter establishes the governance framework that guides the long-term evolution of Sakeng. It defines how decisions are made, how documentation is maintained, and how the platform preserves consistency as it grows.
Governance is not intended to slow development. It exists to ensure that growth remains deliberate, sustainable, and aligned with Sakeng’s mission, values, and architecture.

## Introduction
Building software is only the beginning.
Maintaining a high-quality product requires consistent decision-making, clear documentation and shared standards.
As Sakeng evolves, new features, contributors and technologies will naturally emerge. Without governance, the platform risks becoming inconsistent, difficult to maintain and disconnected from its original purpose.
This ### Chapter provides the framework that ensures Sakeng continues to grow without compromising the principles established throughout this Architecture.
1.	The Architecture Is the Source of Truth
This Architecture document serves as the primary reference for product, design and engineering decisions.
Where uncertainty exists, contributors should consult this document before implementing changes.
If the Architecture no longer reflects the platform, the Architecture should be updated rather than ignored.
2.	Documentation Before Implementation
Significant features should be designed before they are developed.
Major changes should begin with documentation that explains:
•	The problem being solved.
•	The proposed solution.
•	The expected user impact.
•	Any architectural implications.
Clear documentation leads to better engineering decisions and more consistent AI-assisted development.
3.	Change With Purpose
Every meaningful change should have a clear reason.
Before introducing a new feature or architectural change, contributors should ask:
•	What problem does this solve?
•	Does it align with our mission?
•	Does it improve the user experience?
•	Is it consistent with our principles?
•	Can the existing solution be improved instead?
Features should be added because they create value, not because they are technically interesting.
4.	Version the Architecture
The Architecture is a living document.
As Sakeng evolves, the document should be reviewed and updated to reflect important decisions.
Each revision should include:
•	Version number.
•	Date of revision.
•	Summary of changes.
•	Author or reviewer.
This creates a clear history of how the platform has evolved over time.
5.	Major Decisions Should Be Recorded
Important architectural decisions should not exist only in conversations or commit messages.
Major decisions should be recorded as Architectural Decision Records (ADRs) or an equivalent decision log.
Examples include:
•	Adopting a new technology.
•	Changing the authentication model.
•	Redesigning the database.
•	Introducing a new platform module.
•	Revising core product principles.
Recording decisions preserves valuable context for future contributors.
6.	Maintain a Single Source of Truth
Documentation should not conflict.
Each topic should have one authoritative document.
For example:
•	Architecture → Product vision and principles.
•	Database Schema → Data model.
•	Design System → Visual language.
•	Engineering Playbook → Development practices.
•	AI Context → AI development guidance.
This reduces duplication and prevents conflicting information.
7.	Every Contribution Should Improve the Platform
Contributors are encouraged to leave the platform better than they found it.
This may include:
•	Improving documentation.
•	Refactoring code.
•	Simplifying user interfaces.
•	Increasing consistency.
•	Enhancing performance.
Continuous improvement is part of Sakeng’s culture.
8.	Review Before Release
Major changes should be reviewed before reaching production.
Reviews should consider:
•	Product alignment.
•	User experience.
•	Design consistency.
•	Engineering quality.
•	Security.
•	Performance.
•	Documentation updates.
A feature is only complete when it satisfies all of these areas.
9.	Governance Supports Innovation
Governance should never discourage new ideas.
Instead, it provides a structured process for evaluating them.
Innovation is encouraged when it:
•	Solves genuine user problems.
•	Aligns with Sakeng’s mission.
•	Strengthens the platform.
•	Preserves simplicity and trust.
Good governance enables innovation rather than restricting it.
#### Governance Principles
Every governance decision should uphold the following principles:
•	Mission before features.
•	Documentation before complexity.
•	Consistency before convenience.
•	Quality before speed.
•	Long-term thinking before short-term gains.
•	Transparency in decision-making.
•	Continuous improvement.
What This Means in Practice
Governance influences Sakeng’s day-to-day development in practical ways:
•	Major features begin with documented requirements before development starts.
•	Architecture, design and engineering documents are reviewed regularly and updated when significant decisions are made.
•	Every pull request should be evaluated not only for code quality but also for alignment with Sakeng’s principles.
•	AI-assisted development follows the documented standards rather than introducing inconsistent patterns.
•	New contributors can understand the project by reading the Architecture before writing code.

### Chapter Summary
Governance ensures that Sakeng grows with purpose rather than by accident. By documenting decisions, maintaining a single source of truth and reviewing changes against established principles, the platform can evolve confidently while preserving the values, simplicity and trust that define its identity.
Governance Lifecycle 
Idea  Problem Definition  Documentation  Architecture Review  AI/Developer Implementation  Testing & Q&A  Production Release  Feedback & Improvement 

### Chapter 12 - Trust, Security & Performance
Purpose
This ### Chapter defines the principles and standards that ensure Sakeng remains a trusted, secure, and high-performing platform. These qualities are fundamental to the user experience and should be considered during every stage of product design, engineering, and operations.
Trust, security, and performance are not optional features. They are core characteristics of the platform and contribute directly to user confidence and long-term adoption.


## Introduction
A livestock marketplace succeeds only when people feel confident using it.
Buyers must trust the information they see.
Sellers must trust the platform with their listings.
Both must trust that their personal information is handled responsibly.
At the same time, the platform must remain fast and responsive, even for users with limited internet connectivity or entry-level smartphones.
Every engineering and product decision should strengthen these three pillars.

#### Section 1 — Trust
Trust Is Built, Not Claimed
Trust cannot be created through branding alone.
It is earned through consistent, transparent and reliable experiences.
Every interaction should reinforce the user’s confidence in the platform.

#### Verification Philosophy
Sakeng adopts a selective verification model.
The platform does not verify every livestock listing.
Instead, verification is applied selectively to livestock or sellers that have completed the appropriate verification process.
This approach allows Sakeng to scale efficiently while maintaining the value and credibility of verified listings.
Verification should always be transparent and should never imply guarantees beyond what has been verified.



#### Transparency
Users should always understand:
•	Who is selling the livestock.
•	Whether the livestock is verified.
•	Whether the listing is Available, Reserved or Sold.
•	Where the livestock is located.
•	What information has been provided by the seller.
The platform should never create false impressions or misleading expectations.
Marketplace Integrity
Sakeng promotes honest participation by:
•	Encouraging accurate listings.
•	Providing structured listing fields.
•	Allowing users to report suspicious content.
•	Removing listings that violate platform policies.
•	Taking action against fraudulent behavior.
Trust is maintained through consistent enforcement rather than isolated interventions.

#### Section 2 — Security
#### Security by Design
Security should be considered from the earliest stages of development.
Protecting users, their data, and marketplace information is a shared responsibility across the platform.
#### Authentication & Authorization
Only authenticated users may perform actions that modify platform data.
Access permissions should follow the principle of least privilege.
Users should only access information and functionality appropriate to their role.


#### Data Protection
Sakeng is committed to protecting personal and marketplace information.
This includes:
•	Secure authentication.
•	Protected database access.
•	Encrypted communication.
•	Controlled access to uploaded files.
•	Responsible handling of personal information.
#### Secure Development
Every feature should be reviewed for:
•	Authentication.
•	Authorization.
•	Input validation.
•	File upload safety.
•	Database security.
•	API protection.
Security reviews should become part of the normal development workflow rather than a final checklist.

#### Section 3 — Performance
Performance Is Part of the Product
Fast software demonstrates respect for the user’s time and internet costs.
Performance should be considered a product feature rather than an engineering optimization.
Designing for Real-World Connectivity
Sakeng is built for the realities of Lesotho.
Many users rely on:
•	Mobile networks.
•	Limited monthly data.
•	Entry-level Android devices.
•	Variable internet speeds.
The platform should remain usable under these conditions.
#### Performance Principles
Every implementation should aim to:
•	Minimize page load times.
•	Reduce unnecessary network requests.
•	Compress images before upload.
•	Optimize image delivery.
•	Cache frequently accessed content.
•	Load only the data required for each page.
•	Keep JavaScript bundles lightweight.
#### Reliability
Users should experience a platform that is:
•	Responsive.
•	Stable.
•	Predictable.
•	Available.
Reliability strengthens trust just as much as security.

#### Trust, Security & Performance Checklist
Every significant feature should be evaluated against these questions:
#### Trust
•	Does it increase user confidence?
•	Is information presented transparently?
•	Can users easily understand what they are seeing?
#### Security
•	Is user data protected?
•	Are permissions correctly enforced?
•	Have security risks been considered?
#### Performance
•	Does it load quickly?
•	Is unnecessary data avoided?
•	Does it perform well on slower mobile connections?
A feature should not be considered complete until it satisfies all three areas.
What This Means in Practice
These principles shape Sakeng’s implementation in measurable ways:
•	Verification badges are displayed only for verified sellers or livestock, preserving the credibility of the verification system.
•	Every listing clearly displays its lifecycle status—Available, Reserved or Sold—to reduce confusion and improve buyer confidence.
•	Row Level Security protects all sensitive database tables, ensuring users only access data they are authorized to view or modify.
•	Images are compressed before storage, served efficiently through a CDN and cached where appropriate to reduce bandwidth consumption.
•	The application prioritizes lightweight pages, efficient database queries and responsive interfaces so that users on slower mobile networks can still browse the marketplace comfortably.
#### Trust, Security & Performance Principles
Every decision should reinforce these commitments:
•	Trust is earned through transparency.
•	Security is built into every layer.
•	Performance is part of the user experience.
•	Privacy is respected.
•	Reliability is expected.
•	Simplicity strengthens confidence.





### Chapter Summary
Trust, security, and performance are fundamental to Sakeng’s success. By designing for transparency, protecting user data, and optimizing for the realities of mobile connectivity in Lesotho, the platform delivers an experience that users can rely on with confidence.

### Chapter 13 - Product Roadmap 
Purpose
This ### Chapter outlines the long-term direction of the Sakeng platform. It provides a strategic roadmap for future development while reinforcing the principle that growth should be deliberate, user-driven, and aligned with the platform’s mission.
The roadmap is intended to guide prioritization rather than commit to fixed delivery dates. As user needs evolve, the order and scope of future initiatives may change.

## Introduction
Sakeng begins with a focused mission: to create Lesotho’s most trusted livestock marketplace.
Achieving this mission requires discipline.
Rather than attempting to solve every agricultural challenge from the outset, Sakeng will grow incrementally, building upon a strong foundation and expanding only when new features create meaningful value for users.
Each phase of the roadmap strengthens the platform before introducing additional capabilities.

#### Roadmap Philosophy
Every new initiative should satisfy four questions before development begins:
•	Does it solve a real user problem?
•	Does it strengthen the marketplace?
•	Does it align with Sakeng’s mission?
•	Is the platform ready for it?

Growth should be intentional, not reactive.

#### Phase 1 — Marketplace Foundation (Current Focus)
Objective
Establish a trusted, reliable, and easy-to-use livestock marketplace for Lesotho.
Core Deliverables
•	User registration and authentication.
•	Buy livestock.
•	Sell livestock.
•	Listing management dashboard.
•	Search and filtering.
•	Structured livestock data.
•	Responsive mobile-first experience.
•	Selective verification.
•	Performance optimization.
•	Secure cloud infrastructure.
##### Success Measure
A marketplace where buyers and sellers can confidently complete livestock transactions.

#### Phase 2 — Marketplace Enhancement
Objective
Improve the buying and selling experience based on real user feedback.
Potential Enhancements
•	Saved listings.
•	Saved searches.
•	Seller profiles.
•	Improved search and filtering.
•	Listing analytics for sellers.
•	Livestock request marketplace.
•	Enhanced notifications.
•	Better image management.
#### Success Measure
Higher engagement, improved user satisfaction and increased marketplace activity.

#### Phase 3 — Agricultural Services
Objective
Expand Sakeng beyond a marketplace by supporting the wider agricultural ecosystem.
Potential Services
1.	Livestock transport partners.
2.	Veterinary directory.
3.	Feed and agricultural suppliers.
4.	Financing partners.
5.	Livestock insurance.
6.	Educational resources.
7.	AI-assisted pricing guidance.
These services should complement the marketplace rather than distract from it.

#### Phase 4 — National Agricultural Platform
Objective
Position Sakeng as the digital infrastructure for livestock trading and agricultural insight in Lesotho.
#### Future Opportunities
1.	National livestock statistics.
2.	Regional supply and demand insights.
3.	Wool and mohair marketplace.
4.	Dairy marketplace.
5.	Poultry marketplace expansion.
6.	Government and institutional partnerships.
7.	Cooperative and association support.
8.	Agricultural export opportunities.

The long-term vision is to create a platform that benefits not only individual farmers but the entire agricultural sector.
#### Innovation Principles
Innovation should always remain grounded in user value.
Sakeng will:
•	Listen before building.
•	Validate before scaling.
•	Improve before expanding.
•	Focus before diversifying.
Every feature should strengthen the platform rather than increase complexity.
#### Measuring Progress
Progress should be measured through meaningful outcomes rather than the number of features released.
#### Indicators of success include:
•	Growth in active listings.
•	Increase in successful transactions.
•	Improved buyer and seller satisfaction.
•	Faster listing creation.
•	Better search success rates.
•	Increased trust in the platform.
•	Sustainable platform performance.
Success is defined by the value delivered to users, not by the volume of functionality.
#### Long-Term Vision
The ultimate ambition of Sakeng extends beyond building a marketplace.
Our vision is to create the trusted digital infrastructure that connects farmers, buyers, businesses and institutions, making livestock trading more transparent, efficient and accessible across Lesotho.
By growing thoughtfully and remaining true to our principles, Sakeng aims to contribute meaningfully to the development of the country’s agricultural economy.

What This Means in Practice
The roadmap guides decision-making rather than dictating rigid timelines.
In practice, this means:
•	The MVP remains the highest priority until it proves its value in the market.
•	Future features are driven by user feedback and measurable needs.
•	New services are introduced only when they strengthen the core marketplace.
•	Every phase builds upon the stability and success of the previous one.
•	The platform evolves through continuous learning rather than assumptions.

### Chapter Summary
Sakeng’s roadmap reflects a commitment to purposeful growth. By focusing first on building a trusted livestock marketplace and expanding only when the foundation is strong, the platform can deliver lasting value while remaining true to its mission of serving Lesotho’s agricultural community.

Closing Remarks
The Sakeng Architecture is more than a technical document—it is a shared understanding of what we are building, why we are building it, and how we will build it together.
As technologies evolve and new opportunities emerge, this document should continue to guide the platform while adapting thoughtfully to change. Every revision should strengthen Sakeng’s mission, preserve its principles, and improve the experience for the people who depend on it.
Our goal is not simply to build software.
Our goal is to build a platform that earns trust, creates opportunity, and contributes to the long-term growth of agriculture in Lesotho.





# APPENDICES
## A – Visual Design Board 
Purpose 
The Design Board serves as the visual reference for Sakeng’s interface. It defines the colors, typography, components, and spacing standards that ensure consistency throughout the platform.
## Brand Identity Palette
Name 			Hex 		Usage 
Brand Green 		#20352E 	Logo, headings, premium CTAs.
Accent Yellow 	#E5AA27  	Verified badges, and trust indicators.
Brand Cream 		#ECDEC2 	 Marketing surfaces, and promotional sections.
## Application UI Palette
Name 			Hex 		Usage
Background 		#F8F6F2  	Application background.
Surface 		#FFFFFF  	Cards, Header, and Footer.
Action Green 		#3D7A5E 	 Primary buttons
Hover Green 		#285F44 	 Hover states
Border 		#E5E7EB  	Dividers and borders.
## Typography Colors
Element		Hex 
Headings 		#20352E
Price 			#20352E
Body 			#3F564C
Secondary 		#6D8077



## Typography 
Primary Font 
Google Inter
## Font Hierarchy
Element		Weight 
Hero Title 		 Bold
Page Title 		 Semibold
Section Title 		 Semibold
Body 			 Regular
Secondary 		 Regular
## Button System 
Premium CTA 
Used only for:
•	Sell Livestock
•	Request Livestock
Background:
#20352E
## Standard Primary Button 
Background:
#3D7A5E
Hover:
#285F44
## Secondary Button 
White Background with green border.


## Status Badges 
Status 		Suggested Color 
Available 		Green 
Reserved 		 Amber 
Sold 			 Gray 
Verified 		 Yellow 
## Card Principles 
Cards should: 
•	Float on background.
•	Use generous spacing.
•	Have consistent border radius.
•	Contain a clear hierarchy.
•	Never feel crowded.
## Iconography
## Library:
•	Lucide React 
Icons should support text and remain simple.
## Spacing Principles 
•	Consistent padding.
•	Consistent margins.
•	Whitespace is intentional.
•	Mobile-first layouts.
## Border Radius
Use a consistent radius throughout the application. 
Recommendation: 
12px


## Shadows
Subtle shadows only. 
Cards should appear elevated without looking heavy.
## Semantic Demand Tokens 
brand.primary
brand.accent
brand.cream

surface.background
surface.card

action.primary
action.hover

text.primary
text.secondary

border.default

status.available
status.reserved
status.sold
status.verified




# B – Information Architecture & Sitemap
## Homepage 
•	Browse Livestock
o	Listing Details
•	Request Livestock
•	Sell Livestock
•	About Us 
•	Contact
•	Authentication
o	Login
o	Register
## Admin Area 
Dashboard 
•	Listings 
o	Add Listing 
o	Edit Listing 
o	Mark as Sold
•	Users
•	Verification
•	Reports
•	Settings

# C - Technology Stack 
## Infrastructure
Service 		Provider 
Domain 		 Hostinger 
Hosting 		Vercel 
Database 		Supabase
Storage 		 Supabase Storage 
CDN 			Vercel 

## Frontend
Technology 
Next.js
React
Typescript
Tailwind CSS
shadcn/ui

## Development 
Tool 
GitHub
GitHub Codespaces
Gemini
ChatGPT

# D – Folder Structure
app/
components/
features/
hooks/
lib/
types/
styles/
public/
supabase/
 
# E – Database ERD
listings
listing_images
categories
breeds
types
districts
verification_request
livestock_requests 
This is intentionally high-level. Detailed SQL belongs in DATABASE_SCHEMA.md.

# F – Naming Conventions 
#### Database 
snake_case
Example:
listing_images
created_at
seller_id
#### React Components
PascalCase 
Example: 
ListingCard.tsx
HeroSection.tsx
#### Functions
camelCase 
#### Files
kebab-case
#### Environment Variables
UPPER_CASE 
#### Routes
/livestock
/request_livestock
/listings/[id]

# G – Documentation Log 
Version	Date 		Description   
1.0		July 2026	Initial Architecture 
1.1 		TBD		Future revisions 


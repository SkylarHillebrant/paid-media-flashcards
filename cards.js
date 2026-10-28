// Card data. d = deck, q = question, s = the answer to say out loud,
// p = key points, x = worked example, n = a note to fill in before the interview.
window.CARDS = [
  {
    "d": "Mindset",
    "q": "What's your north star metric for knowing paid spend is working?",
    "s": "Cost per qualified opportunity, or put the other way, pipeline per dollar. Leads and CPL are early signals, but I judge spend on the opportunities and pipeline it creates in the CRM.",
    "p": [
      "CPL is a form-fill metric. Qualified is not the same as submitted.",
      "Report pipeline-to-spend. 3x or better is a strong B2B SaaS number.",
      "Watch lead-to-opportunity rate so quality holds as volume grows."
    ]
  },
  {
    "d": "Mindset",
    "q": "Leadership increased spend 30%. How do you know it's working?",
    "s": "I measure it at the margin. I compare the new pipeline against the new spend, not the blended average, because the blended number can look fine while the last dollars do very little.",
    "p": [
      "Marginal cost per opportunity is the number to watch.",
      "Rising CPC and CPL are the first sign a channel is saturating.",
      "Branded search and direct traffic tell you if you're creating demand or just taking credit for it.",
      "Run a holdout or geo test when the change is big enough.",
      "Give it one sales cycle before calling it."
    ]
  },
  {
    "d": "Mindset",
    "q": "What is LTV:CAC and what's a healthy ratio?",
    "s": "Lifetime gross-margin value of a customer divided by what it cost to win them. Around 3 to 1 is healthy.",
    "p": [
      "LTV = annual revenue per account × gross margin ÷ annual churn.",
      "Below 1 to 1, you lose money on every customer.",
      "Above 5 to 1, you're probably underspending and leaving growth on the table."
    ],
    "x": "$24K a year × 80% margin ÷ 20% churn = $96K LTV. $1.2M spend ÷ 40 new customers = $30K CAC. LTV:CAC = 3.2 to 1."
  },
  {
    "d": "Mindset",
    "q": "What is CAC payback and what's a good target?",
    "s": "How many months of gross margin it takes to earn back what we spent to win the customer. Mid-market SaaS usually aims for 12 to 18 months.",
    "x": "CAC $30K ÷ ($2,000 a month × 80% margin) = about 19 months."
  },
  {
    "d": "Mindset",
    "q": "Blended CAC vs marginal CAC. Why does it matter when you scale?",
    "s": "Blended is all spend over all customers. Marginal is what the next customer costs. When I scale, I watch marginal, because blended hides diminishing returns.",
    "x": "Add $100K a quarter and get 2 more customers. Marginal CAC = $50K, so LTV:CAC on the new dollars is 1.9 to 1, while blended still looks like 3 to 1."
  },
  {
    "d": "Mindset",
    "q": "How do you set an allowable cost per lead?",
    "s": "I work backward from the economics. ACV and target CAC give me an allowable cost per deal, then I walk that back through the close rates to SQL and MQL.",
    "x": "ACV $50K, target CAC $15K, SQL to close 20%: $15K × 20% = $3,000 per SQL. MQL to SQL 25%: $3,000 × 25% = $750 per MQL."
  },
  {
    "d": "Mindset",
    "q": "How do you split a B2B SaaS budget between Google and LinkedIn?",
    "s": "Search first, to capture people already looking. Then LinkedIn, to create demand inside the ICP and retarget. I'd start around 60/40 and let cost per opportunity move it from there.",
    "p": [
      "Search captures demand. LinkedIn creates it.",
      "Common starting points: $8K to $15K a month on search, $5K to $10K on LinkedIn.",
      "Protect brand and high-intent search before anything else."
    ]
  },
  {
    "d": "Mindset",
    "q": "How long do you give a new channel before judging it?",
    "s": "First opportunities can show up in 2 to 6 weeks, but I want 60 to 90 days, and at least one sales cycle for the stage I'm judging, before I make a call.",
    "p": [
      "Agree up front on what result would mean scale, fix or cut.",
      "Judge early on leading indicators: lead quality, SQL rate, engaged accounts."
    ]
  },
  {
    "d": "Mindset",
    "q": "How do you prove a channel is incremental?",
    "s": "Platform numbers over-claim, so I test. LinkedIn conversion lift tests, Google Ads experiments, or a geo or account holdout, with the decision rule agreed before we start.",
    "p": [
      "Watch branded search and direct traffic in target accounts.",
      "Pair it with self-reported attribution: \"How did you hear about us?\""
    ]
  },
  {
    "d": "Mindset",
    "q": "HubSpot says deals came from direct. Google and LinkedIn both claim them. Who's right?",
    "s": "Neither alone. Platforms over-claim with view-through and modeled conversions, and the CRM under-credits paid because of lost UTMs, dark social and multiple devices. I optimize on platform conversions and report on CRM opportunity source, self-reported attribution and lift tests.",
    "p": [
      "Fix UTM and hidden-field hygiene first.",
      "Use GA4 last non-direct touch as a tiebreaker.",
      "Run lift tests for the big budget questions."
    ]
  },

  {
    "d": "Google Ads",
    "q": "How would you structure a Google Ads account for a B2B SaaS company?",
    "s": "I split it by intent: brand, non-brand category, pain or problem, competitor alternatives, and retargeting. Brand stays on its own so it doesn't flatter the blended CPA.",
    "p": [
      "Brand: exact and phrase. Cheap, high intent. Watch competitors bidding on the name.",
      "Category: \"[category] software\", \"best [category] tool\". This is the core.",
      "Pain or problem: higher volume, lower intent. Own budget so it can't starve category.",
      "Competitor: \"[competitor] alternative\" to a comparison page. No competitor trademarks in ad text.",
      "Retargeting and Demand Gen: Customer Match from the CRM. Exclude customers and open opportunities.",
      "PMax comes later, and only once offline conversions are flowing."
    ]
  },
  {
    "d": "Google Ads",
    "q": "How do you think about match types today?",
    "s": "Exact and phrase now match close variants and same-meaning searches, so exact isn't literal anymore. Broad leans on signals and only works with Smart Bidding and a quality conversion behind it. In small B2B markets, I start tight and earn my way to broad.",
    "p": [
      "Broad plus manual CPC plus no negatives is the classic money pit."
    ]
  },
  {
    "d": "Google Ads",
    "q": "Walk me through your negative keyword process.",
    "s": "I review the search terms report every week and keep shared negative lists, so new junk gets blocked across campaigns at once.",
    "p": [
      "Usual B2B negatives: jobs, careers, salary, free, template, login, course, certification, student.",
      "Add the brand as a negative on non-brand campaigns.",
      "Sort search terms by cost with zero conversions to find the leaks."
    ]
  },
  {
    "d": "Google Ads",
    "q": "Which bid strategy do you use, and when?",
    "s": "It depends on conversion volume and how much the conversions are worth.",
    "p": [
      "Manual CPC or Max Clicks with a cap: new account, under about 15 conversions a month.",
      "Maximize Conversions: reliable conversions but no stable CPA yet.",
      "Target CPA: 15 to 30+ conversions a month. Seed it near the actual CPA, then step it down 10 to 15% at a time.",
      "Max Conversion Value or Target ROAS: once stages carry values. This is where B2B accounts should end up.",
      "Target Impression Share: mostly for brand."
    ]
  },
  {
    "d": "Google Ads",
    "q": "What is value-based bidding, and how would you use it for B2B?",
    "s": "I give each funnel stage a value based on expected revenue, send MQL, SQL and opportunity back as separate conversions, and let Target ROAS optimize toward pipeline instead of form fills.",
    "p": [
      "Only the stage you bid on is Primary. The rest are Secondary for reporting.",
      "If volume is too low, bid on the earliest stage that still tracks with quality and report on opportunities."
    ],
    "x": "ACV $30K and 20% of SQLs close, so an SQL is worth about $6K."
  },
  {
    "d": "Google Ads",
    "q": "We only get 8 conversions a month. Which bid strategy?",
    "s": "That's too few for Target CPA to learn. I'd use manual CPC or Max Clicks with a cap, or Max Conversions on a proxy that still tracks with quality, like a qualified form or a booked meeting. And I'd consolidate campaigns so the data isn't split too thin."
  },
  {
    "d": "Google Ads",
    "q": "What is Quality Score and what goes into Ad Rank?",
    "s": "Quality Score is 1 to 10, built from expected CTR, ad relevance and landing page experience. It feeds Ad Rank, which decides position and what I pay per click.",
    "p": [
      "Ad Rank = bid, ad quality, landing page, the expected impact of assets, and auction context.",
      "Compare the historical Quality Score columns to see if it slipped."
    ]
  },
  {
    "d": "Google Ads",
    "q": "Impression share lost to budget vs lost to rank. What's the difference?",
    "s": "Lost to budget means I'm capped, so I raise the budget or narrow the targeting. Lost to rank means my bids or quality are too low, so I fix relevance and landing pages before I add money.",
    "x": "40% impression share, 45% lost to rank, 15% lost to budget. Rank is the real limit, not budget."
  },
  {
    "d": "Google Ads",
    "q": "How do you manage responsive search ads and assets?",
    "s": "Up to 15 headlines and 4 descriptions. I pin sparingly, like a compliance line, because pinning lowers ad strength and limits testing. Assets like sitelinks, callouts and structured snippets raise CTR and Ad Rank.",
    "p": [
      "Lead with the pain or outcome, then proof, then the offer.",
      "Match the headline to the landing page so conversion rate holds."
    ]
  },
  {
    "d": "Google Ads",
    "q": "You inherit an account. What settings do you check first?",
    "s": "The settings that quietly waste money or confuse Smart Bidding.",
    "p": [
      "Location option is \"Presence,\" not \"Presence or interest.\"",
      "Display Network is off on Search campaigns. Search Partners stays off until proven.",
      "Auto-applied recommendations are off.",
      "Primary conversion is a real lead, not a page view or button click.",
      "Lead conversions count \"One,\" not \"Every.\"",
      "Ad schedule and geo match where sales can actually respond."
    ]
  },
  {
    "d": "Google Ads",
    "q": "What's your take on Performance Max for B2B?",
    "s": "I wouldn't start a B2B account on PMax. I'd prove Search first, get offline conversions flowing, then test PMax as an experiment judged on SQLs, with brand excluded.",
    "p": [
      "The risk: it chases the cheapest conversion and finds junk leads on Display and Discover.",
      "Controls: brand exclusions, campaign-level negatives, customer list signals, search themes, URL exclusions.",
      "Channel-level reporting now shows Search vs YouTube vs Display vs Gmail."
    ]
  },
  {
    "d": "Google Ads",
    "q": "What is AI Max for Search?",
    "s": "It's a setting inside Search campaigns, not a new campaign type. It adds keywordless matching, AI-written ad text and final URL expansion. I'd test it as an experiment once tracking is solid and watch the search terms closely, because it widens matching.",
    "p": [
      "It has controls for brands, locations and URLs.",
      "Ads can now show in AI Overviews and AI Mode. You can't target or exclude that placement on its own."
    ]
  },
  {
    "d": "Google Ads",
    "q": "How do you test changes in Google Ads?",
    "s": "For bid strategy, AI Max or landing page tests, I use Google Ads experiments so there's a real control group. I change one thing at a time so I know what moved the number.",
    "p": [
      "Big changes restart Smart Bidding learning. Expect one to two weeks of wobble.",
      "Don't stack changes on a campaign that's still learning."
    ]
  },
  {
    "d": "Google Ads",
    "q": "Where does Microsoft Ads fit in a B2B program?",
    "s": "Microsoft Ads lets you layer LinkedIn profile targeting, like company, industry and job function, onto search. The clicks are often cheaper and the audience leans B2B, so importing the Google campaigns and testing it is an easy win."
  },

  {
    "d": "LinkedIn Ads",
    "q": "Walk me through the Campaign Manager structure.",
    "s": "Ad account, then campaign, which used to be called the campaign group, then ad set, which used to be the campaign, then ads. LinkedIn renamed them in late 2025.",
    "p": [
      "The rename can break reporting exports and UTM macros built on the old names."
    ]
  },
  {
    "d": "LinkedIn Ads",
    "q": "What objectives does LinkedIn offer, and which do you use for lead gen?",
    "s": "Awareness, consideration and conversion. For lead gen I mostly run conversion objectives, lead generation with native forms or website conversions, and use consideration objectives to build retargeting pools.",
    "p": [
      "Awareness: brand awareness, judged on reach and CPM.",
      "Consideration: website visits, engagement, video views.",
      "Conversion: lead generation, website conversions."
    ]
  },
  {
    "d": "LinkedIn Ads",
    "q": "How would you target IT decision makers on LinkedIn?",
    "s": "Job function plus seniority for scale, and job titles for tight ABM plays, layered with company size and industry or a company list. Then I exclude students, entry level, current customers, competitors and our own employees.",
    "p": [
      "Titles are precise but fragment the audience.",
      "Function plus seniority scales but drifts, so check the demographics report."
    ]
  },
  {
    "d": "LinkedIn Ads",
    "q": "What settings do you switch off for B2B lead gen?",
    "s": "Audience Expansion and the LinkedIn Audience Network. Both widen delivery past the ICP and hurt lead quality.",
    "p": [
      "Also check the conversion windows and how much credit goes to view-through. View-through can make LinkedIn look better than it is."
    ]
  },
  {
    "d": "LinkedIn Ads",
    "q": "How do you use matched and predictive audiences?",
    "s": "Retargeting pools are the backbone of a full-funnel LinkedIn program: website visitors through the Insight Tag, video viewers, lead form openers, company page visitors and ad engagers. Predictive Audiences replaced Lookalikes in 2024 and build from a seed like a CRM list.",
    "p": [
      "A matched audience needs at least 300 members to serve.",
      "Company list uploads power ABM. Check the match rate."
    ]
  },
  {
    "d": "LinkedIn Ads",
    "q": "How big should a LinkedIn audience be?",
    "s": "The usual guidance is about 50,000+ for Sponsored Content and 15,000+ for Message Ads. A 20,000-person ABM audience can still work, but delivery gets harder and CPMs go up.",
    "n": "LinkedIn shifts these numbers. Check Campaign Manager before quoting them."
  },
  {
    "d": "LinkedIn Ads",
    "q": "Which LinkedIn ad formats do you use, and when?",
    "s": "Single image is the workhorse. Document ads with Lead Gen Forms are great for gated content. Video warms the audience and builds a video-viewer retargeting pool. Thought Leader Ads for reach and trust. Conversation ads sparingly, for events and high-intent retargeting.",
    "p": [
      "Carousel works for multi-feature or step-by-step stories.",
      "Event Ads can now point to an outside registration page.",
      "Text and Spotlight ads are cheap but low impact."
    ]
  },
  {
    "d": "LinkedIn Ads",
    "q": "What are Thought Leader Ads and why do they work?",
    "s": "They promote a person's post, usually an executive's, as an ad. They work because they look native and people trust a person more than a logo. I'd still judge them on what the retargeting and conversion layers produce in the CRM, not on the cheap CPC.",
    "p": [
      "One agency's 15-month data: 4.65% CTR and $0.51 CPC, vs 0.68% and $2.42 for other formats.",
      "A common split: about 25 to 40% of LinkedIn budget.",
      "Layer them: warm the ICP, retarget engagers, then convert.",
      "Rotate on engagement: keep posts above 2% CTR, cut posts below 1%."
    ]
  },
  {
    "d": "LinkedIn Ads",
    "q": "How do you bid on LinkedIn?",
    "s": "Manual bidding or a cost cap while I'm learning costs and for narrow ABM audiences. Maximum delivery once the audience is big enough and I trust the conversion signal.",
    "p": [
      "Maximum delivery spends the budget for the most results, but can overpay in small audiences.",
      "A cost cap that's too low slows delivery."
    ]
  },
  {
    "d": "LinkedIn Ads",
    "q": "LinkedIn is expensive. How do you justify it?",
    "s": "B2B CPCs often run $8 to $15 or more, and leads are commonly over $100. So I judge LinkedIn on cost per opportunity and on what it does to branded search and direct demand in target accounts, not on CPL.",
    "p": [
      "LinkedIn reaches buyers before they search. Google only catches them after."
    ]
  },
  {
    "d": "LinkedIn Ads",
    "q": "What are your Lead Gen Form best practices?",
    "s": "Keep the form short, but add one or two qualifying questions, and sync it straight to the CRM so sales follows up fast.",
    "p": [
      "Hidden fields for campaign and UTM data.",
      "Ask for a work email, not a personal one.",
      "Direct HubSpot or Salesforce sync for speed to lead."
    ]
  },
  {
    "d": "LinkedIn Ads",
    "q": "How often do you refresh creative?",
    "s": "About monthly, or sooner when frequency climbs past 6 to 8 and CTR starts dropping. I run one or two controlled tests per channel per month, so I know what actually moved the number.",
    "p": [
      "Test one variable at a time: hook, offer, format or visual.",
      "Frequency is mostly controlled through audience size, budget and rotation."
    ]
  },
  {
    "d": "LinkedIn Ads",
    "q": "How do you connect LinkedIn to the CRM?",
    "s": "The Insight Tag handles website conversions and retargeting. The Conversions API sends server-side and CRM conversions back. With Qualified Leads Optimization I send MQL or SQL outcomes so LinkedIn optimizes toward qualified leads, and I keep the fast form-fill signal so delivery stays stable.",
    "p": [
      "CAPI connects through HubSpot, Salesforce, partners like Zapier, or CSV upload.",
      "Conversion Value Optimization bids toward value, like value-based bidding on Google."
    ]
  },
  {
    "d": "LinkedIn Ads",
    "q": "How do you prove LinkedIn is working?",
    "s": "A conversion lift test for incrementality, the Revenue Attribution Report for pipeline influenced, and the Company Engagement Report to show sales which target accounts are warming up.",
    "p": [
      "Brand Lift for awareness campaigns.",
      "Watch branded search and direct traffic from target accounts."
    ]
  },

  {
    "d": "Tracking",
    "q": "How do you set up conversion tracking for lead gen?",
    "s": "Fire the conversion on a confirmed form submit or thank-you page, never a button click. One conversion action per lifecycle stage, only the stage I bid on set to Primary, and a value on each stage.",
    "p": [
      "Google tag or Google Tag Manager on site.",
      "Count \"One\" for leads.",
      "Test it yourself with Tag Assistant."
    ]
  },
  {
    "d": "Tracking",
    "q": "What are enhanced conversions for leads?",
    "s": "The tag captures a hashed email from the form. Later, when that lead becomes an MQL, SQL or opportunity in the CRM, we upload the stage with the same email, and Google matches it back to the original click.",
    "p": [
      "It doesn't depend on storing the GCLID, but including it when you have it improves accuracy.",
      "Turn on form-interaction data collection in the Google tag.",
      "Check match rates in diagnostics."
    ]
  },
  {
    "d": "Tracking",
    "q": "GCLID offline import vs enhanced conversions. What's the difference?",
    "s": "The older way captured the GCLID in a hidden form field and stored it on the CRM record. A GCLID is only good for 90 days, so with long B2B cycles you upload an earlier milestone like MQL or SQL. Enhanced conversions for leads matches on hashed email instead, which is more durable."
  },
  {
    "d": "Tracking",
    "q": "What changed with Google offline conversion uploads in 2026?",
    "s": "Since June 15, 2026, offline and enhanced-conversions-for-leads uploads go through the Data Manager API and are blocked in the Google Ads API. Google Ads Data Manager connects directly to HubSpot and Salesforce, so that's the recommended path.",
    "p": [
      "HubSpot's own Google Ads integration can also sync lifecycle stages back as conversions."
    ]
  },
  {
    "d": "Tracking",
    "q": "What attribution model does Google Ads use?",
    "s": "Data-driven is the default. Google retired first click, linear, time decay and position based in 2023, so it's data-driven or last click."
  },
  {
    "d": "Tracking",
    "q": "What is Consent Mode v2 and when does it matter?",
    "s": "It passes users' consent choices to Google so tags behave correctly and Google can model the conversions it can't observe. It matters for any EU or UK traffic, and plenty of SaaS companies sell into Europe.",
    "p": [
      "Pair it with a proper cookie consent platform."
    ]
  },
  {
    "d": "Tracking",
    "q": "How do you make sure the CRM gives paid the right credit?",
    "s": "Every ad gets UTMs, every form carries hidden fields for source, campaign and click IDs, and those map to CRM properties so the opportunity source survives. Without that, the CRM under-credits paid.",
    "p": [
      "Add \"How did you hear about us?\" for self-reported attribution.",
      "Agree on MQL and SQL definitions with sales before you bid on them."
    ]
  },

  {
    "d": "Scenarios",
    "q": "Non-brand search CPA jumped 40% week over week. Walk me through it. (2 minutes)",
    "s": "First I'd make sure the jump is real. I'd check conversion lag, confirm the conversion action is still recording, and compare against the CRM. Then I'd open change history around the date it turned and see whether bidding is in a learning period. Next I'd split CPA into CPC and conversion rate to see which one moved. If CPC moved, I'm in auction insights and Quality Score. If conversion rate moved, I'm in search terms, devices and the landing page. I'd segment until I find where it lives, fix the most likely cause first, one change at a time, and add a data exclusion if tracking broke. And I'd judge the fix on SQLs and pipeline, not just the platform CPA."
  },
  {
    "d": "Scenarios",
    "q": "CPA spike: what are the steps, in order?",
    "s": "Is it real, what changed, which half moved, where does it live, then fix and report.",
    "p": [
      "1. Is the data real? Conversion lag (add Conversions by conv. time), tracking status, goal changes, site or form changes, the CRM.",
      "2. What changed? Change history, learning status, budget jumps, auto-applied recommendations.",
      "3. Split it: CPA = CPC ÷ conversion rate.",
      "4. Segment: campaign, match type, device, network, geo, day, brand vs non-brand.",
      "5. Search terms: sort by cost with zero conversions.",
      "6. Outside world: seasonality, competitors, pricing, sales capacity.",
      "7. Fix one thing at a time. Data exclusion for broken dates.",
      "8. Tell stakeholders what happened, what changed, when you'll know."
    ]
  },
  {
    "d": "Scenarios",
    "q": "CPC went up vs conversion rate went down. Where do you look?",
    "s": "They point to different problems, so I look in different places.",
    "p": [
      "CPC up: a new or more aggressive competitor, lower Quality Score, a loosened target. Look at auction insights, historical Quality Score and change history.",
      "Conversion rate down: worse traffic, a landing page problem, a weaker offer, a broken form. Look at search terms, device and geo, and the page on a phone.",
      "Both: usually structural. Broad match or AI Max expansion, Search Partners or Display turned on, a geo setting change."
    ]
  },
  {
    "d": "Scenarios",
    "q": "LinkedIn leads are cheap, but sales says they're junk. What do you do?",
    "s": "I'd audit the targeting, the offer and the form. Then I'd move the conversion goal to a CRM stage with Qualified Leads Optimization, agree on the lead definition with sales, and measure on SQL rate instead of CPL.",
    "p": [
      "Targeting: function and seniority drift, Audience Expansion or Audience Network on.",
      "Offer: a top-of-funnel ebook won't produce SQLs.",
      "Form: no qualifying questions, personal emails allowed."
    ]
  },
  {
    "d": "Scenarios",
    "q": "PMax is producing lots of conversions but no pipeline. Why, and what do you do?",
    "s": "It's probably optimizing to raw form fills on Display and Discover inventory. I'd check channel reporting and placements, look for spam submissions, switch the primary goal to a qualified offline stage, and add brand exclusions and negatives. If it still can't produce SQLs, I'd pause it and move the budget to Search.",
    "p": [
      "Add a honeypot or verification to the form."
    ]
  },
  {
    "d": "Scenarios",
    "q": "The CFO wants to cut LinkedIn because CPL is $400 vs $150 on Google.",
    "s": "I wouldn't argue CPL against CPL. I'd compare cost per SQL and cost per opportunity by source, look at whether LinkedIn is driving branded search and direct traffic in target accounts, and offer a lift test or holdout. And I'd agree in advance on what result would justify the cut.",
    "x": "LinkedIn $400 CPL at 25% lead to SQL = $1,600 per SQL. Google $150 CPL at 8% = $1,875 per SQL. The \"expensive\" channel is cheaper per SQL."
  },
  {
    "d": "Scenarios",
    "q": "New role: $20K a month, ACV $30K, and HubSpot is a mess. What do you do in the first 30 days?",
    "s": "Fix the foundation, then launch high intent, and report on pipeline from day one.",
    "p": [
      "Weeks 1 to 2: audit tracking, CRM lifecycle stages, lead sources and the current accounts. Talk to sales about the ICP and what a good lead looks like.",
      "Weeks 2 to 3: fix tracking (Google tag, Insight Tag, enhanced conversions, CAPI, UTMs, hidden fields). Agree on MQL and SQL definitions.",
      "Weeks 3 to 4: launch or rebuild Search (brand, category, competitor) at about $12K, and LinkedIn at about $8K for Thought Leader Ads plus retargeting with a demo offer.",
      "Set expectations: first opportunities in 2 to 6 weeks, a fair read at 60 to 90 days."
    ]
  },
  {
    "d": "Scenarios",
    "q": "How would you run ABM for 500 target accounts?",
    "s": "On LinkedIn I'd upload the company list, check the match rate, layer function and seniority, warm accounts with Thought Leader Ads and document ads, retarget engagers, and use the Company Engagement Report to hand warm accounts to SDRs. On Google I'd use Customer Match where we have contacts, plus a category and competitor search net. Then I'd measure engagement, meetings and opportunities on the list, not leads.",
    "p": [
      "Microsoft Ads with LinkedIn company targeting adds another layer.",
      "Run it alongside SDR outreach so marketing and sales hit the same accounts at the same time."
    ]
  },
  {
    "d": "Scenarios",
    "q": "Leadership wants to double paid spend next quarter. How do you scale it?",
    "s": "In steps, not all at once. I'd raise budgets about 20 to 30% at a time, add new intent and new audiences instead of just pushing bids, and watch marginal cost per opportunity at each step. We'd agree on the number that means keep going or stop.",
    "p": [
      "Saturation signals: impression share near the ceiling, rising CPCs, LinkedIn frequency climbing.",
      "Big budget jumps push Smart Bidding into pricier auctions. Expect some CPA rise."
    ]
  },
  {
    "d": "Scenarios",
    "q": "Budget gets cut 30%. Where do you cut?",
    "s": "I cut by cost per opportunity, worst first. I protect brand, high-intent category search and the best retargeting, and cut the top-of-funnel and pain terms, Display and the weakest LinkedIn audiences.",
    "p": [
      "Keep tracking and one small test running so you can rebuild later."
    ]
  },
  {
    "d": "Scenarios",
    "q": "Conversion tracking broke for a week. What do you do?",
    "s": "Fix the tag first and confirm it's recording. Then add a data exclusion for the broken dates so Smart Bidding doesn't learn from bad data, annotate reporting, and tell stakeholders which numbers to ignore.",
    "p": [
      "A data exclusion lives under Bid strategies, Advanced controls.",
      "For a known short spike, like a sale, use a seasonality adjustment instead."
    ]
  },

  {
    "d": "Math",
    "q": "CPC is $12 and conversion rate is 4%. What's the CPA? What if CPC goes to $15?",
    "s": "$12 ÷ 0.04 = $300. At $15 with the same conversion rate, it's $375, which is 25% higher."
  },
  {
    "d": "Math",
    "q": "$15K a month in spend produced $60K in pipeline. What's pipeline-to-spend?",
    "s": "4x. Anything above 3x is a strong number for B2B SaaS paid."
  },
  {
    "d": "Math",
    "q": "ACV $30K, opportunity win rate 25%, SQL to opportunity 50%. What's each stage worth?",
    "s": "Opportunity = $30K × 25% = $7,500. SQL = $7,500 × 50% = $3,750. Those are the values I'd feed to value-based bidding."
  },
  {
    "d": "Math",
    "q": "ACV $50K, target CAC $15K, SQL to close 20%, MQL to SQL 25%. What can you pay per SQL and per MQL?",
    "s": "$15K × 20% = $3,000 per SQL. $3,000 × 25% = $750 per MQL."
  },
  {
    "d": "Math",
    "q": "LinkedIn CPL $400 with 25% lead to SQL. Google CPL $150 with 8% lead to SQL. Which is cheaper per SQL?",
    "s": "LinkedIn: $400 ÷ 0.25 = $1,600 per SQL. Google: $150 ÷ 0.08 = $1,875 per SQL. LinkedIn wins."
  },
  {
    "d": "Math",
    "q": "Impression share is 40%, 45% lost to rank, 15% lost to budget. What do you fix?",
    "s": "Rank. Budget isn't the main limit, so I'd work on Quality Score, ad relevance and bids before adding budget."
  },

  {
    "d": "My Stories",
    "q": "Tell me about your paid media background.",
    "s": "I've been in digital marketing for 13+ years, including about 4 years leading paid acquisition and demand gen at B2B SaaS companies. At SugarCRM I ran more than $1M a year across Google, Microsoft and paid social and cut cost per lead 15%. At Veracross I ran Google, LinkedIn and programmatic on $100K to $500K a year, and cut cost per lead 15% while growing lead volume 20%."
  },
  {
    "d": "My Stories",
    "q": "Your results are CPL numbers. How do they connect to pipeline?",
    "s": "We cut cost per lead 15% while growing volume 20%, and the point of that was more qualified pipeline for sales at the same budget. Getting there meant tightening targeting and tracking so the extra leads were the right ones.",
    "n": "Have one example of how you tied ad spend to MQLs, SQLs or opportunities in HubSpot or Salesforce."
  },
  {
    "d": "My Stories",
    "q": "Tell me about a test that changed your results.",
    "s": "At SugarCRM my A/B tests and landing page work lifted website conversion rate 15%. I come in with a hypothesis, test it, then scale it, improve it or stop it.",
    "n": "Pick one specific test: what you changed, why, and what it did."
  },
  {
    "d": "My Stories",
    "q": "Tell me about your ABM experience.",
    "s": "I led the restructure of our paid digital lead gen program into an ABM framework, including onboarding Demandbase so our spend went to the accounts we actually wanted. I planned cross-channel campaigns across video, social and programmatic, including competitive campaigns, and ran it alongside SDR outreach so marketing and sales hit the same accounts at the same time.",
    "n": "How you picked the accounts, and how sales used the signal."
  },
  {
    "d": "My Stories",
    "q": "Describe a paid channel you launched from zero.",
    "s": "At Veracross I launched our Meta Ads program from scratch. I set up the account and tracking, then brought in CRM and ABM data to build audiences around the people and companies we wanted to reach, and it became a new source of MQLs.",
    "n": "Have a result ready if you can share one that's already public."
  },
  {
    "d": "My Stories",
    "q": "Tell me about a tracking problem you found and fixed.",
    "s": "I owned GA4 and Google Tag Manager for accurate attribution, and I was Marketing's ambassador to InfoSec for cookie consent and GDPR, so I'm the person who makes sure the numbers we optimize against are real.",
    "n": "Tell one real tracking fix as a story: what broke, how you caught it, what changed."
  },
  {
    "d": "My Stories",
    "q": "How do you use AI in your paid media work?",
    "s": "I build AI into the whole workflow with Claude Code and MCP integrations. The biggest build is EagleIQ, my own internal agent and reporting platform. It pulls Google Ads, GA4, Search Console and Meta into one place, answers questions in plain English with the data behind it, and flags wasted spend before anyone has to ask.",
    "n": "One concrete time it saved, or one thing it caught."
  },
  {
    "d": "My Stories",
    "q": "They ask about something you haven't done. What do you say?",
    "s": "\"I haven't done that exact setup, but here's how I'd approach it.\" Then walk through it. Technical interviewers respect that more than a guess."
  },

  {
    "d": "Ask Them",
    "q": "Questions to ask the technical interviewer",
    "s": "Pick two or three.",
    "p": [
      "What's the monthly spend today, and how is it split between Google and LinkedIn?",
      "Are offline conversions wired up from the CRM yet?",
      "How do you define a qualified opportunity, and who owns that definition?",
      "Where do you stand on PMax and AI Max for B2B right now?",
      "What do you use for reporting and alerts?",
      "What would a great first 90 days look like in this role?"
    ]
  }
];

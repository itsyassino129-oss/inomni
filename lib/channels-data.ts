// lib/channels-data.ts

export type CountryCode =
  | 'US'
  | 'UK'
  | 'CA'
  | 'AU'
  | 'EU'
  | 'CN'
  | 'IN'
  | 'PK'
  | 'JP'
  | 'KR'
  | 'ME'
  | 'PH'
  | 'TH'
  | 'VN'
  | 'ID'
  | 'MY'
  | 'NZ';

export interface Channel {
  name: string;
  quality: '4K UHD' | 'FHD 60FPS' | 'HD';
  genre?: string;
  description: string;
  whyWatch?: string;
  country?: CountryCode;
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ChannelCategory {
  slug: string;
  name: string;
  totalChannels: number;
  description: string;
  longDescription: string;
  keywords: string[];
  channels: Channel[];
  faqs: FAQItem[];
  featured?: boolean;
}

export const channelsData: ChannelCategory[] = [
  {
    slug: 'sports',
    name: 'All Sports Channels',
    totalChannels: 3000,
    description:
      'Every major sport from around the world in smooth 60FPS with Dodo IPTV. Includes ESPN, Fox Sports, NFL Network, NBA TV, MLB Network, NHL Network, TNT Sports, Sky Sports, plus every NFL, NBA, MLB, NHL, college football, Premier League, UFC, and Formula 1 match.',
    longDescription:
      'Traditional cable providers force sports fans into expensive tiered packages with long lock-in contracts. With a Dodo IPTV subscription, you unlock the complete global sports universe—ESPN, Fox Sports, NFL Network, NBA TV, MLB Network, NHL Network, Sky Sports, plus every NFL, NBA, MLB, NHL, college football, Premier League, UFC, and Formula 1 match at a fraction of the cost. Our dedicated servers in New York, Los Angeles, and London are optimised for 60FPS high bitrate delivery, ensuring smooth playback during Super Bowl Sunday, NBA Finals, NFL playoffs, or any peak viewing event.',
    keywords: [
      'dodo iptv sports',
      'best iptv subscription sports',
      'iptv subscription live sports',
      'espn iptv subscription',
      'fox sports iptv',
      'nfl sunday iptv',
      'nba iptv usa',
      'mlb iptv usa',
      'nhl iptv usa',
      'sky sports iptv',
      'ufc ppv iptv',
      'formula 1 iptv',
      'nfl iptv usa',
      'college football iptv',
      'live sports iptv usa',
    ],
    channels: [
      { name: 'ESPN HD', quality: 'FHD 60FPS', genre: 'US Sports', country: 'US', description: 'The worldwide leader in sports with NFL, NBA, MLB, and UFC coverage.', popular: true },
      { name: 'ESPN 2 HD', quality: 'FHD 60FPS', genre: 'US Sports', country: 'US', description: 'Additional US sports programming including college football, NBA, and MLB.', popular: true },
      { name: 'ESPNU HD', quality: 'FHD 60FPS', genre: 'College Sports', country: 'US', description: 'College sports coverage with NCAA football, basketball, and more.' },
      { name: 'ESPN News HD', quality: 'FHD 60FPS', genre: 'Sports News', country: 'US', description: 'Round-the-clock sports news, analysis, and debate.' },
      { name: 'FS1 HD', quality: 'FHD 60FPS', genre: 'US Sports', country: 'US', description: 'Fox Sports 1 with MLB, NASCAR, UFC Fight Nights, and more.', popular: true },
      { name: 'FS2 HD', quality: 'FHD 60FPS', genre: 'US Sports', country: 'US', description: 'Fox Sports 2 with international football and additional sports coverage.' },
      { name: 'NFL Network HD', quality: 'FHD 60FPS', genre: 'NFL', country: 'US', description: '24/7 NFL coverage, Thursday Night Football, and NFL RedZone replays.', popular: true },
      { name: 'NBA TV HD', quality: 'FHD 60FPS', genre: 'NBA', country: 'US', description: 'Round-the-clock NBA coverage, classic games, and live analysis.', popular: true },
      { name: 'MLB Network HD', quality: 'FHD 60FPS', genre: 'MLB', country: 'US', description: 'Major League Baseball coverage with live games and analysis.', popular: true },
      { name: 'NHL Network HD', quality: 'FHD 60FPS', genre: 'NHL', country: 'US', description: 'National Hockey League coverage with live games and player analysis.' },
      { name: 'TNT Sports US HD', quality: 'FHD 60FPS', genre: 'NBA & MLB', country: 'US', description: 'TNT NBA coverage plus MLB playoff games and international sport.' },
      { name: 'TBS Sports HD', quality: 'FHD 60FPS', genre: 'MLB Playoffs', country: 'US', description: 'Major League Baseball postseason coverage and March Madness.' },
      { name: 'Big Ten Network HD', quality: 'FHD 60FPS', genre: 'College Sports', country: 'US', description: 'NCAA Big Ten conference football, basketball, and other sports.' },
      { name: 'SEC Network HD', quality: 'FHD 60FPS', genre: 'College Sports', country: 'US', description: 'Southeastern Conference football and basketball coverage.' },
      { name: 'ACC Network HD', quality: 'FHD 60FPS', genre: 'College Sports', country: 'US', description: 'Atlantic Coast Conference football and basketball coverage.' },
      { name: 'Pac-12 Network HD', quality: 'FHD 60FPS', genre: 'College Sports', country: 'US', description: 'Pac-12 conference football and basketball coverage.' },
      { name: 'NFL RedZone HD', quality: 'FHD 60FPS', genre: 'NFL', country: 'US', description: 'Every NFL Sunday touchdown, live and commercial-free.', popular: true },
      { name: 'MLB Network Strike Zone', quality: 'FHD 60FPS', genre: 'MLB', country: 'US', description: 'Live look-ins at every MLB game during the regular season.' },
      { name: 'NBA League Pass HD', quality: 'FHD 60FPS', genre: 'NBA', country: 'US', description: 'Every out-of-market NBA game live across the regular season.' },
      { name: 'NHL Center Ice HD', quality: 'FHD 60FPS', genre: 'NHL', country: 'US', description: 'Every out-of-market NHL game live from every arena.' },
      { name: 'Tennis Channel HD', quality: 'FHD 60FPS', genre: 'Tennis', country: 'US', description: '24/7 tennis with all ATP and WTA tournaments and Grand Slams.', popular: true },
      { name: 'Golf Channel HD', quality: 'FHD 60FPS', genre: 'Golf', country: 'US', description: 'PGA Tour, LPGA, and Major Championship coverage 24/7.' },
      { name: 'UFC Fight Pass Live', quality: 'FHD 60FPS', genre: 'MMA', country: 'US', description: 'Numbered UFC events, Fight Nights, Contender Series, and full PPV main cards.', popular: true },
      { name: 'WWE Network', quality: 'FHD 60FPS', genre: 'Wrestling', country: 'US', description: 'WWE Raw, SmackDown, NXT, and full pay-per-view events.' },
      { name: 'AEW Plus HD', quality: 'FHD 60FPS', genre: 'Wrestling', country: 'US', description: 'All Elite Wrestling with Dynamite, Rampage, and PPV events.' },
      { name: 'Sky Sports Main Event', quality: 'FHD 60FPS', genre: 'UK Premier League', country: 'UK', description: 'Full English Premier League coverage with UK commentary and analysis.', popular: true },
      { name: 'Sky Sports F1', quality: 'FHD 60FPS', genre: 'Formula 1', country: 'UK', description: 'Dedicated F1 channel with onboard cameras, qualifying, and race weekend coverage.', popular: true },
      { name: 'Sky Sports Premier League', quality: 'FHD 60FPS', genre: 'Football', country: 'UK', description: 'Dedicated Premier League channel with every televised match.' },
      { name: 'Sky Sports Football', quality: 'FHD 60FPS', genre: 'Football', country: 'UK', description: 'Championship, League One, and international football coverage.' },
      { name: 'Sky Sports Cricket', quality: 'FHD 60FPS', genre: 'Cricket', country: 'UK', description: 'England cricket, international tours, and The Ashes coverage.' },
      { name: 'Sky Sports Golf', quality: 'FHD 60FPS', genre: 'Golf', country: 'UK', description: 'PGA Tour, DP World Tour, and Major Championship coverage.' },
      { name: 'Sky Sports Action', quality: 'FHD 60FPS', genre: 'Multi Sport', country: 'UK', description: 'Rugby, boxing, and additional live sports events.' },
      { name: 'Sky Sports Arena', quality: 'FHD 60FPS', genre: 'Multi Sport', country: 'UK', description: 'Darts, snooker, and additional live sport events.' },
      { name: 'TNT Sports 1 HD', quality: 'FHD 60FPS', genre: 'Multi Sport', country: 'UK', description: 'Champions League football, UFC, and MotoGP coverage.' },
      { name: 'TNT Sports 2 HD', quality: 'FHD 60FPS', genre: 'Multi Sport', country: 'UK', description: 'Additional TNT Sports feed with Premier League and European football.' },
      { name: 'TSN 1 HD', quality: 'FHD 60FPS', genre: 'Canadian Sports', country: 'CA', description: 'Canada sports leader with NHL, NBA, and CFL coverage.' },
      { name: 'TSN 2 HD', quality: 'FHD 60FPS', genre: 'NFL & NBA', country: 'CA', description: 'NFL Sunday coverage, Monday Night Football, and NBA playoff matchups.' },
      { name: 'TSN 3 HD', quality: 'FHD 60FPS', genre: 'Soccer & MLB', country: 'CA', description: 'Premier League matches, MLB coverage, and MLB playoff games.' },
      { name: 'TSN 4 HD', quality: 'FHD 60FPS', genre: 'Formula 1 & Tennis', country: 'CA', description: 'Formula 1 races, Grand Slam tennis, and international sports events.' },
      { name: 'TSN 5 HD', quality: 'FHD 60FPS', genre: 'Multi Sport', country: 'CA', description: 'Additional TSN feed for parallel events and multiple simultaneous games.' },
      { name: 'Sportsnet Ontario HD', quality: 'FHD 60FPS', genre: 'Canadian Sports', country: 'CA', description: 'Canadian sports network with NHL, MLB, and NBA coverage.' },
      { name: 'Sportsnet West HD', quality: 'FHD 60FPS', genre: 'Canadian Sports', country: 'CA', description: 'Western Canadian sports with NHL and NBA coverage.' },
      { name: 'Sportsnet East HD', quality: 'FHD 60FPS', genre: 'Canadian Sports', country: 'CA', description: 'Eastern Canadian sports with NHL and regional coverage.' },
      { name: 'Sportsnet 360 HD', quality: 'FHD 60FPS', genre: 'WWE & UFC', country: 'CA', description: 'WWE Raw and SmackDown, UFC Fight Nights, and combat sports coverage.' },
      { name: 'Sportsnet One HD', quality: 'FHD 60FPS', genre: 'Premier Sports', country: 'CA', description: 'Premier League football, international soccer tournaments, and NHL games.' },
      { name: 'Fox Sports AU 501 HD', quality: 'FHD 60FPS', genre: 'Australian Sports', country: 'AU', description: 'Australian Fox Sports feed with cricket, rugby, and motorsport.' },
      { name: 'Fox Sports AU 502 HD', quality: 'FHD 60FPS', genre: 'Australian Sports', country: 'AU', description: 'Additional Australian Fox Sports feed with parallel events.' },
      { name: 'Optus Sport HD', quality: 'FHD 60FPS', genre: 'Australian Football', country: 'AU', description: 'English Premier League and UEFA Champions League coverage for Australia.' },
      { name: 'DAZN Boxing & PPV', quality: 'FHD 60FPS', genre: 'Combat Sports', country: 'UK', description: 'Matchroom Boxing, Golden Boy Promotions, and major boxing PPV events worldwide.' },
      { name: 'Fight Sports HD', quality: 'FHD 60FPS', genre: 'Combat Sports', country: 'US', description: 'Boxing, kickboxing, and MMA from around the world.' },
      { name: 'Red Bull TV HD', quality: 'FHD 60FPS', genre: 'Extreme Sports', country: 'EU', description: 'Extreme sports, motorsport, and adventure programming.' },
      { name: 'Olympic Channel HD', quality: 'FHD 60FPS', genre: 'Olympics', country: 'EU', description: 'Olympic sports coverage, highlights, and athlete profiles.' },
      { name: 'Eurosport 1 HD', quality: 'FHD 60FPS', genre: 'Tennis & Cycling', country: 'EU', description: 'Grand Slam tennis, Tour de France, and winter sports coverage.' },
      { name: 'Eurosport 2 HD', quality: 'FHD 60FPS', genre: 'Multi Sport', country: 'EU', description: 'Additional European sport channel with cycling and motorsport coverage.' },
    ],
    faqs: [
      {
        question: 'Can I watch NFL, NBA, MLB, NHL, and UFC pay-per-view events live with Dodo IPTV?',
        answer:
          'Yes. Every Dodo IPTV channel package includes full live NFL, NBA, MLB, NHL, college football, Premier League, and major UFC and boxing pay-per-view events without extra add-on fees.',
      },
      {
        question: 'Is there any delay compared to traditional cable?',
        answer:
          'No. Our dedicated servers in New York, Los Angeles, and London use 60FPS high-bitrate connections with minimal latency so you watch live events in real time.',
      },
      {
        question: 'Do you offer catch-up for missed games?',
        answer:
          'Yes. Most sports channels include catch-up support and a synchronised EPG guide so you can rewatch matches you missed.',
      },
    ],
    featured: true,
  },
  {
    slug: 'usa',
    name: 'USA Channels',
    totalChannels: 5000,
    description:
      'Full access to every major US network on Dodo IPTV. ABC, CBS, NBC, FOX, HBO, Showtime, ESPN, CNN, and premium entertainment in Full HD and 4K.',
    longDescription:
      'Access the full range of American television through Dodo IPTV—from major broadcast networks (ABC, CBS, NBC, FOX, CW) to premium cable channels (HBO, Showtime, Starz, AMC) and dedicated sports networks (ESPN, FS1, NFL Network). Our US lineup includes East and West coast feeds so you can watch primetime shows on your schedule.',
    keywords: [
      'dodo iptv usa channels',
      'us channels iptv subscription',
      'hbo iptv subscription',
      'showtime iptv',
      'espn iptv subscription',
      'american tv channels iptv',
      'abc cbs nbc iptv',
      'best iptv subscription',
    ],
    channels: [
      { name: 'ABC East HD', quality: 'FHD 60FPS', genre: 'US Broadcast', country: 'US', description: 'Major US network with primetime hits, live sports, and late-night shows.', popular: true },
      { name: 'ABC West HD', quality: 'FHD 60FPS', genre: 'US Broadcast', country: 'US', description: 'West coast ABC feed for Pacific time zone viewers.' },
      { name: 'CBS East HD', quality: 'FHD 60FPS', genre: 'US Broadcast', country: 'US', description: 'US drama hits, NFL Sunday coverage, and primetime entertainment.', popular: true },
      { name: 'CBS West HD', quality: 'FHD 60FPS', genre: 'US Broadcast', country: 'US', description: 'West coast CBS feed for Pacific time zone viewers.' },
      { name: 'NBC East HD', quality: 'FHD 60FPS', genre: 'US Broadcast', country: 'US', description: 'US variety shows, live sports, and award-winning dramas.', popular: true },
      { name: 'NBC West HD', quality: 'FHD 60FPS', genre: 'US Broadcast', country: 'US', description: 'West coast NBC feed for Pacific time zone viewers.' },
      { name: 'FOX East HD', quality: 'FHD 60FPS', genre: 'US Broadcast', country: 'US', description: 'US primetime hits, NFL Football, and major entertainment events.' },
      { name: 'FOX West HD', quality: 'FHD 60FPS', genre: 'US Broadcast', country: 'US', description: 'West coast FOX feed for Pacific time zone viewers.' },
      { name: 'The CW HD', quality: 'FHD 60FPS', genre: 'US Broadcast', country: 'US', description: 'Superhero series, teen dramas, and American entertainment.' },
      { name: 'PBS HD', quality: 'FHD 60FPS', genre: 'US Public', country: 'US', description: 'American public broadcasting with documentaries and educational shows.' },
      { name: 'HBO East HD', quality: 'FHD 60FPS', genre: 'Premium Cable', country: 'US', description: 'HBO original series, blockbuster movies, and premium entertainment.', popular: true },
      { name: 'HBO West HD', quality: 'FHD 60FPS', genre: 'Premium Cable', country: 'US', description: 'West coast HBO feed with the same premium programming.' },
      { name: 'HBO 2 HD', quality: 'FHD 60FPS', genre: 'Premium Cable', country: 'US', description: 'Second HBO channel with additional films and originals.' },
      { name: 'HBO Signature HD', quality: 'FHD 60FPS', genre: 'Premium Cable', country: 'US', description: 'Additional HBO feed featuring top original series and films.' },
      { name: 'HBO Family HD', quality: 'FHD 60FPS', genre: 'Premium Family', country: 'US', description: 'Family-friendly HBO programming including animated features.' },
      { name: 'HBO Comedy HD', quality: 'FHD 60FPS', genre: 'Comedy', country: 'US', description: 'HBO comedy specials, stand-up, and comedic series.' },
      { name: 'Showtime East HD', quality: 'FHD 60FPS', genre: 'Premium Cable', country: 'US', description: 'Showtime originals, hit movies, and major boxing events.', popular: true },
      { name: 'Showtime 2 HD', quality: 'FHD 60FPS', genre: 'Premium Cable', country: 'US', description: 'Additional Showtime feed with movies and original series.' },
      { name: 'Showtime Showcase HD', quality: 'FHD 60FPS', genre: 'Premium Cable', country: 'US', description: 'Showcase feed with premium films and dramas.' },
      { name: 'Starz East HD', quality: 'FHD 60FPS', genre: 'Premium Cable', country: 'US', description: 'Starz original series, first-run movies, and premium dramas.' },
      { name: 'Starz Encore HD', quality: 'FHD 60FPS', genre: 'Premium Cable', country: 'US', description: 'Encore channel with classic films and library content.' },
      { name: 'Cinemax HD', quality: 'FHD 60FPS', genre: 'Premium Cable', country: 'US', description: 'Cinemax films, action series, and late-night programming.' },
      { name: 'AMC HD', quality: 'FHD 60FPS', genre: 'Premium Cable', country: 'US', description: 'AMC original series, prestige dramas, and film marathons.', popular: true },
      { name: 'AMC+ HD', quality: 'FHD 60FPS', genre: 'Premium Cable', country: 'US', description: 'AMC+ programming and exclusive original series.' },
      { name: 'FX HD', quality: 'FHD 60FPS', genre: 'Premium Cable', country: 'US', description: 'FX original dramas, comedies, and anthology series.' },
      { name: 'FXX HD', quality: 'FHD 60FPS', genre: 'Comedy', country: 'US', description: 'FXX comedies and exclusive content from the FX family.' },
      { name: 'CNN USA HD', quality: 'FHD 60FPS', genre: 'US News', country: 'US', description: 'American and international news coverage 24/7 from CNN.', popular: true },
      { name: 'CNN International HD', quality: 'FHD 60FPS', genre: 'International News', country: 'US', description: 'Global news coverage from CNN International with worldwide bureaus.' },
      { name: 'MSNBC HD', quality: 'FHD 60FPS', genre: 'US News', country: 'US', description: 'US news coverage, political analysis, and commentary.' },
      { name: 'FOX News HD', quality: 'FHD 60FPS', genre: 'US News', country: 'US', description: 'American news, political debates, and opinion programming.' },
      { name: 'CNBC HD', quality: 'FHD 60FPS', genre: 'Business', country: 'US', description: 'Business news, market analysis, and financial programming.' },
      { name: 'Bloomberg TV HD', quality: 'FHD 60FPS', genre: 'Business', country: 'US', description: 'Global business and financial market coverage 24 hours a day.' },
      { name: 'USA Network HD', quality: 'FHD 60FPS', genre: 'Entertainment', country: 'US', description: 'USA Network original series, wrestling, and entertainment programming.' },
      { name: 'TNT HD', quality: 'FHD 60FPS', genre: 'Entertainment', country: 'US', description: 'TNT original dramas, movies, and sports coverage.' },
      { name: 'TBS HD', quality: 'FHD 60FPS', genre: 'Comedy', country: 'US', description: 'TBS sitcoms, comedy, and Major League Baseball coverage.' },
      { name: 'Bravo HD', quality: 'FHD 60FPS', genre: 'Reality', country: 'US', description: 'Bravo reality shows, series, and lifestyle programming.' },
      { name: 'E! Entertainment HD', quality: 'FHD 60FPS', genre: 'Entertainment', country: 'US', description: 'Celebrity news, entertainment, and pop culture programming.' },
      { name: 'Comedy Central HD', quality: 'FHD 60FPS', genre: 'Comedy', country: 'US', description: 'Comedy Central shows, stand-up specials, and satire.' },
      { name: 'Syfy HD', quality: 'FHD 60FPS', genre: 'Sci-Fi', country: 'US', description: 'Science fiction, fantasy, and supernatural programming.' },
      { name: 'Paramount Network HD', quality: 'FHD 60FPS', genre: 'Entertainment', country: 'US', description: 'Flagship dramas, movies, and entertainment programming.' },
      { name: 'MTV HD', quality: 'FHD 60FPS', genre: 'Music & Reality', country: 'US', description: 'Music videos, reality shows, and youth-oriented entertainment.' },
      { name: 'VH1 HD', quality: 'FHD 60FPS', genre: 'Music', country: 'US', description: 'Music programming, reality shows, and pop culture.' },
      { name: 'BET HD', quality: 'FHD 60FPS', genre: 'Entertainment', country: 'US', description: 'Black Entertainment Television with music, comedy, and dramas.' },
      { name: 'Food Network HD', quality: 'FHD 60FPS', genre: 'Food', country: 'US', description: 'Cooking shows, competitions, and celebrity chef programming.' },
      { name: 'HGTV HD', quality: 'FHD 60FPS', genre: 'Home & Garden', country: 'US', description: 'Home improvement, renovation, and real estate programming.' },
      { name: 'Travel Channel HD', quality: 'FHD 60FPS', genre: 'Travel', country: 'US', description: 'Travel, adventure, and exploration documentaries.' },
      { name: 'History Channel HD', quality: 'FHD 60FPS', genre: 'History', country: 'US', description: 'Historical documentaries, reality shows, and educational content.' },
      { name: 'Discovery Channel US HD', quality: 'FHD 60FPS', genre: 'Documentary', country: 'US', description: 'Discovery programming across science, adventure, and industry.' },
      { name: 'National Geographic HD', quality: 'FHD 60FPS', genre: 'Documentary', country: 'US', description: 'Nature, science, and exploration documentaries from Nat Geo.' },
      { name: 'Animal Planet US HD', quality: 'FHD 60FPS', genre: 'Nature', country: 'US', description: 'Animal documentaries, wildlife, and pet programming.' },
      { name: 'IFC HD', quality: 'FHD 60FPS', genre: 'Independent Film', country: 'US', description: 'Independent films, cult comedy, and original series.' },
      { name: 'Sundance TV HD', quality: 'FHD 60FPS', genre: 'Independent Film', country: 'US', description: 'Independent film and original drama programming.' },
      { name: 'Oxygen HD', quality: 'FHD 60FPS', genre: 'True Crime', country: 'US', description: 'True crime, investigation, and crime documentary programming.' },
      { name: 'A&E HD', quality: 'FHD 60FPS', genre: 'Reality', country: 'US', description: 'Reality TV, documentary, and crime programming from A&E.' },
      { name: 'Lifetime HD', quality: 'FHD 60FPS', genre: 'Drama', country: 'US', description: 'Lifetime original movies, dramas, and reality programming.' },
      { name: 'Hallmark Channel HD', quality: 'FHD 60FPS', genre: 'Family', country: 'US', description: 'Hallmark original movies, family entertainment, and holiday specials.' },
      { name: 'OWN HD', quality: 'FHD 60FPS', genre: 'Lifestyle', country: 'US', description: 'Oprah Winfrey Network with lifestyle, reality, and inspiration shows.' },
      { name: 'Disney Channel US HD', quality: 'FHD 60FPS', genre: 'Kids', country: 'US', description: 'Disney Channel original series and family programming.' },
      { name: 'Freeform HD', quality: 'FHD 60FPS', genre: 'Youth', country: 'US', description: 'Youth-oriented dramas, comedies, and original series.' },
    ],
    faqs: [
      {
        question: 'Can I watch HBO, Showtime, and premium US channels with Dodo IPTV?',
        answer:
          'Yes. Our US lineup includes premium American channels like HBO, Showtime, Starz, AMC, and more as part of your Dodo IPTV subscription.',
      },
      {
        question: 'Are live American sports channels like ESPN and NFL Network included?',
        answer:
          'Yes. You get access to ESPN, ESPN 2, FS1, NFL Network, NBA TV, and major US sports channels.',
      },
    ],
  },
  {
    slug: 'canadian',
    name: 'Canadian Channels',
    totalChannels: 500,
    description:
      'Complete Canadian broadcasting lineup on Dodo IPTV. CBC, CTV, Global, Citytv, TSN, Sportsnet, TVA, Radio-Canada, and regional channels with EPG and catch-up.',
    longDescription:
      'The full range of Canadian television on Dodo IPTV for expats and viewers who love Canadian content. Includes CBC, CTV, Global, Citytv, TSN, Sportsnet, plus French coverage from TVA and Radio-Canada in Full HD.',
    keywords: [
      'dodo iptv canadian channels',
      'canadian tv iptv subscription',
      'cbc iptv subscription',
      'ctv iptv',
      'tsn iptv subscription',
      'sportsnet iptv',
      'canadian channels iptv',
      'best iptv subscription',
    ],
    channels: [
      { name: 'CBC HD', quality: 'FHD 60FPS', genre: 'National Public', country: 'CA', description: 'CBC News, The National, hockey coverage, and Canadian originals.' },
      { name: 'CBC News Network HD', quality: 'FHD 60FPS', genre: '24/7 News', country: 'CA', description: 'Rolling Canadian news coverage, live political events, and breaking stories.' },
      { name: 'CBC Gem Originals', quality: 'FHD 60FPS', genre: 'Original Series', country: 'CA', description: 'Canadian original dramas, comedies, and documentaries.' },
      { name: 'Ici Radio-Canada Télé HD', quality: 'FHD 60FPS', genre: 'French Public', country: 'CA', description: 'French-language public broadcaster with dramas and news.' },
      { name: 'ICI RDI HD', quality: 'FHD 60FPS', genre: 'French News', country: 'CA', description: 'French Canadian news channel with continuous coverage of national events.' },
      { name: 'ICI Explora HD', quality: 'FHD 60FPS', genre: 'Documentary', country: 'CA', description: 'French-language documentaries, science, and nature programming.' },
      { name: 'CTV HD', quality: 'FHD 60FPS', genre: 'National Commercial', country: 'CA', description: 'CTV National News, primetime dramas, and major live sports coverage.' },
      { name: 'CTV News Channel HD', quality: 'FHD 60FPS', genre: '24/7 News', country: 'CA', description: 'Rolling Canadian and international news coverage with live reports.' },
      { name: 'CTV 2 HD', quality: 'FHD 60FPS', genre: 'Regional Entertainment', country: 'CA', description: 'Regional CTV programming, primetime entertainment, and local news.' },
      { name: 'CTV Comedy HD', quality: 'FHD 60FPS', genre: 'Comedy', country: 'CA', description: 'Comedy Channel with sitcoms and stand-up specials.' },
      { name: 'CTV Drama HD', quality: 'FHD 60FPS', genre: 'Drama', country: 'CA', description: 'Drama Channel with crime, mystery, and drama series.' },
      { name: 'CTV Life HD', quality: 'FHD 60FPS', genre: 'Lifestyle', country: 'CA', description: 'Lifestyle programming including home, food, and travel.' },
      { name: 'CTV Sci-Fi HD', quality: 'FHD 60FPS', genre: 'Sci-Fi', country: 'CA', description: 'Science fiction, fantasy, and supernatural programming.' },
      { name: 'Global TV HD', quality: 'FHD 60FPS', genre: 'National Commercial', country: 'CA', description: 'Global National news, primetime dramas, and movie nights.' },
      { name: 'Global News HD', quality: 'FHD 60FPS', genre: '24/7 News', country: 'CA', description: 'Canadian news, politics, and international coverage 24 hours a day.' },
      { name: 'Global News BC HD', quality: 'FHD 60FPS', genre: 'Regional News', country: 'CA', description: 'British Columbia news coverage from Global News BC.' },
      { name: 'Global News Toronto HD', quality: 'FHD 60FPS', genre: 'Regional News', country: 'CA', description: 'Toronto area news coverage from Global News Toronto.' },
      { name: 'Citytv HD', quality: 'FHD 60FPS', genre: 'Urban Entertainment', country: 'CA', description: 'Citytv original shows, primetime entertainment, and regional morning news.' },
      { name: 'CityNews 24/7 HD', quality: 'FHD 60FPS', genre: 'Local News', country: 'CA', description: 'Local news coverage from Toronto, Vancouver, Calgary, and other Canadian cities.' },
      { name: 'Citytv Vancouver HD', quality: 'FHD 60FPS', genre: 'Regional', country: 'CA', description: 'Vancouver regional programming and news from Citytv.' },
      { name: 'TVA HD', quality: 'FHD 60FPS', genre: 'French Canadian', country: 'CA', description: 'French-language Canadian network with primetime dramas and news.' },
      { name: 'TVA Nouvelles HD', quality: 'FHD 60FPS', genre: 'French News', country: 'CA', description: 'Round-the-clock French Canadian news coverage from TVA Nouvelles.' },
      { name: 'V Télé HD', quality: 'FHD 60FPS', genre: 'French Entertainment', country: 'CA', description: 'Quebec entertainment, reality TV, and French-language series.' },
      { name: 'Noovo HD', quality: 'FHD 60FPS', genre: 'French Commercial', country: 'CA', description: 'Popular Quebec programming, talk shows, and international series.' },
      { name: 'RDS HD', quality: 'FHD 60FPS', genre: 'French Sports', country: 'CA', description: 'Réseau des Sports with French-language sports coverage.' },
      { name: 'TVA Sports HD', quality: 'FHD 60FPS', genre: 'French Sports', country: 'CA', description: 'French-language Canadian sports channel with hockey and other coverage.' },
      { name: 'TSN SportsCentre HD', quality: 'FHD 60FPS', genre: 'Sports News', country: 'CA', description: 'Canada flagship sports news program and daily highlights.' },
      { name: 'The Weather Network CA HD', quality: 'FHD 60FPS', genre: 'Weather', country: 'CA', description: 'Canadian weather forecasts, storm tracking, and climate coverage.' },
      { name: 'Slice HD', quality: 'FHD 60FPS', genre: 'Reality', country: 'CA', description: 'Reality TV, drama, and lifestyle programming on Slice.' },
      { name: 'HGTV Canada HD', quality: 'FHD 60FPS', genre: 'Home & Garden', country: 'CA', description: 'Canadian home improvement and design programming.' },
      { name: 'Food Network Canada HD', quality: 'FHD 60FPS', genre: 'Food', country: 'CA', description: 'Canadian cooking shows and food competition programming.' },
      { name: 'W Network HD', quality: 'FHD 60FPS', genre: 'Women Lifestyle', country: 'CA', description: 'Women-focused programming with drama, reality, and lifestyle.' },
      { name: 'Showcase HD', quality: 'FHD 60FPS', genre: 'Premium Drama', country: 'CA', description: 'Premium dramas and exclusive series on Canadian Showcase.' },
      { name: 'Space HD', quality: 'FHD 60FPS', genre: 'Sci-Fi', country: 'CA', description: 'Canadian science fiction, fantasy, and genre entertainment.' },
      { name: 'YTV HD', quality: 'FHD 60FPS', genre: 'Kids & Youth', country: 'CA', description: 'Canadian kids and youth channel with cartoons and live-action shows.' },
      { name: 'Teletoon HD', quality: 'FHD 60FPS', genre: 'Animation', country: 'CA', description: 'Animated series and comedy for kids and families in Canada.' },
    ],
    faqs: [
      {
        question: 'Can I watch Canadian channels like CBC, CTV, and TSN with Dodo IPTV?',
        answer:
          'Yes. You can watch the Canadian channel lineup with Dodo IPTV without regional restrictions.',
      },
      {
        question: 'Are both English and French Canadian channels included?',
        answer:
          'Yes. Our Canadian category includes English networks like CBC, CTV, Global, and Citytv alongside French networks like TVA, Ici Radio-Canada Télé, RDS, and TVA Sports.',
      },
    ],
  },
  {
    slug: 'uk',
    name: 'UK Channels',
    totalChannels: 1200,
    description:
      'British television lineup on Dodo IPTV. BBC One, BBC Two, ITV1, Channel 4, Channel 5, Sky Sports, Sky Cinema, and UK entertainment in Full HD.',
    longDescription:
      'Watch British television with Dodo IPTV. Includes BBC One, BBC Two, ITV1, Channel 4, Channel 5, Sky Sports, Sky Cinema, and specialty UK entertainment and documentary channels.',
    keywords: [
      'dodo iptv uk channels',
      'uk tv iptv subscription',
      'bbc iptv subscription',
      'itv iptv',
      'sky sports uk iptv',
      'british channels iptv',
      'uk live tv streaming',
    ],
    channels: [
      { name: 'BBC One HD', quality: 'FHD 60FPS', genre: 'UK Public', country: 'UK', description: 'Flagship British broadcaster with BBC News, drama, comedy, and major events.', popular: true },
      { name: 'BBC Two HD', quality: 'FHD 60FPS', genre: 'UK Public', country: 'UK', description: 'Documentaries, arts, history, and classic British television.' },
      { name: 'BBC News UK HD', quality: 'FHD 60FPS', genre: '24/7 News', country: 'UK', description: 'Continuous UK and international news coverage from the BBC.' },
      { name: 'ITV1 HD', quality: 'FHD 60FPS', genre: 'UK Commercial', country: 'UK', description: 'British commercial channel with drama, entertainment, and live sport.', popular: true },
      { name: 'ITV2 HD', quality: 'FHD 60FPS', genre: 'Entertainment', country: 'UK', description: 'Reality TV, comedy, films, and youth entertainment from ITV.' },
      { name: 'ITV3 HD', quality: 'FHD 60FPS', genre: 'Classic Drama', country: 'UK', description: 'Classic British drama, mystery, and nostalgic programming.' },
      { name: 'Channel 4 HD', quality: 'FHD 60FPS', genre: 'UK Commercial', country: 'UK', description: 'UK dramas, comedy, documentaries, and entertainment.' },
      { name: 'Channel 5 HD', quality: 'FHD 60FPS', genre: 'UK Commercial', country: 'UK', description: 'UK lifestyle, documentaries, films, and daily entertainment.' },
      { name: 'Sky Showcase HD', quality: 'FHD 60FPS', genre: 'Sky Entertainment', country: 'UK', description: 'Highlights from Sky channels including flagship drama and comedy.' },
      { name: 'Sky Atlantic HD', quality: 'FHD 60FPS', genre: 'Premium Drama', country: 'UK', description: 'International dramas and original series in the UK.' },
      { name: 'Sky Max HD', quality: 'FHD 60FPS', genre: 'Entertainment', country: 'UK', description: 'Entertainment shows, comedy, and action series on Sky.' },
      { name: 'Sky Cinema Premiere HD', quality: 'FHD 60FPS', genre: 'Movies', country: 'UK', description: 'Movie premieres and cinema on Sky UK.' },
      { name: 'Dave HD', quality: 'FHD 60FPS', genre: 'Comedy & Entertainment', country: 'UK', description: 'UK comedy panel shows, motoring, and entertainment.' },
      { name: 'Gold HD', quality: 'FHD 60FPS', genre: 'Classic Comedy', country: 'UK', description: 'Classic British sitcoms and comedy favourites.' },
    ],
    faqs: [
      {
        question: 'Can I watch UK channels like BBC One, ITV1, and Sky Sports on Dodo IPTV?',
        answer:
          'Yes. UK channels in our lineup are available with no regional geo-blocking.',
      },
      {
        question: 'Are UK news and entertainment channels included?',
        answer:
          'Yes. You get BBC News UK, BBC One, BBC Two, ITV1, Channel 4, Channel 5, Sky channels, and UK comedy and entertainment feeds.',
      },
    ],
  },
  {
    slug: 'australian',
    name: 'Australian Channels',
    totalChannels: 450,
    description:
      'Australian broadcast and sports channels on Dodo IPTV. ABC Australia, Seven, Nine, 10, Fox Sports AU, and Australian entertainment in Full HD.',
    longDescription:
      'Stay connected to Australian television with Dodo IPTV. Includes ABC Australia, Channel 7, Channel 9, Network 10, and Fox Sports AU for cricket, rugby, AFL, and NRL.',
    keywords: [
      'dodo iptv australian channels',
      'australian tv iptv subscription',
      'fox sports au iptv',
      'channel 7 9 10 australia iptv',
      'abc australia iptv',
      'aus tv streaming',
    ],
    channels: [
      { name: 'ABC Australia HD', quality: 'FHD 60FPS', genre: 'National Public', country: 'AU', description: 'Australian national news, drama, documentaries, and children’s programming.' },
      { name: 'Channel 7 HD', quality: 'FHD 60FPS', genre: 'Commercial TV', country: 'AU', description: 'Australian network with news, reality TV, drama, and sport.' },
      { name: 'Channel 9 HD', quality: 'FHD 60FPS', genre: 'Commercial TV', country: 'AU', description: 'Australian news, entertainment, NRL, and cricket coverage.' },
      { name: 'Network 10 HD', quality: 'FHD 60FPS', genre: 'Commercial TV', country: 'AU', description: 'Australian reality shows, comedy, drama, and news.' },
      { name: 'SBS HD', quality: 'FHD 60FPS', genre: 'Multicultural TV', country: 'AU', description: 'World news, international cinema, and diverse documentaries in Australia.' },
      { name: 'Sky News Australia HD', quality: 'FHD 60FPS', genre: '24/7 News', country: 'AU', description: 'Continuous Australian news, politics, and commentary.' },
    ],
    faqs: [
      {
        question: 'Are Australian sports channels included?',
        answer:
          'Yes. Alongside Australian broadcast channels, Fox Sports AU and Optus Sport are included in our sports lineup.',
      },
    ],
  },
  {
    slug: 'european',
    name: 'European Channels',
    totalChannels: 6000,
    description:
      'Thousands of European TV channels on Dodo IPTV across France, Germany, Spain, Italy, Portugal, Netherlands, and more in HD and Full HD.',
    longDescription:
      'Explore a wide selection of European television channels on Dodo IPTV covering news, sports, cinema, and entertainment across France, Germany, Spain, Italy, Portugal, Benelux, and Scandinavia.',
    keywords: [
      'dodo iptv european channels',
      'european tv iptv subscription',
      'french german spanish italian iptv',
      'eu channels iptv',
      'eurosport iptv subscription',
    ],
    channels: [
      { name: 'TF1 HD', quality: 'FHD 60FPS', genre: 'French TV', country: 'EU', description: 'Leading French commercial channel with entertainment, drama, and news.' },
      { name: 'France 2 HD', quality: 'FHD 60FPS', genre: 'French Public', country: 'EU', description: 'French public broadcaster with news, culture, and primetime shows.' },
      { name: 'Das Erste (ARD) HD', quality: 'FHD 60FPS', genre: 'German Public', country: 'EU', description: 'Major German public channel with news, drama, and sports.' },
      { name: 'ZDF HD', quality: 'FHD 60FPS', genre: 'German Public', country: 'EU', description: 'German public broadcaster featuring documentaries, news, and entertainment.' },
      { name: 'La 1 (TVE) HD', quality: 'FHD 60FPS', genre: 'Spanish TV', country: 'EU', description: 'Spanish national television channel with news, series, and events.' },
      { name: 'Rai 1 HD', quality: 'FHD 60FPS', genre: 'Italian TV', country: 'EU', description: 'Flagship Italian public channel with news, drama, and variety shows.' },
    ],
    faqs: [
      {
        question: 'Which European languages and countries are covered?',
        answer:
          'Our European lineup covers major countries and languages including French, German, Spanish, Italian, Portuguese, Dutch, and more.',
      },
    ],
  },
  {
    slug: 'international',
    name: 'International Channels',
    totalChannels: 8000,
    description:
      'Global channels on Dodo IPTV from the Middle East, Asia, India, Pakistan, Japan, Korea, and Latin America in HD and Full HD.',
    longDescription:
      'Access international television through Dodo IPTV, including Arabic, Indian, Pakistani, Japanese, Korean, Chinese, Southeast Asian, and Latin American channels.',
    keywords: [
      'dodo iptv international channels',
      'international iptv subscription',
      'arabic indian pakistani iptv',
      'world tv channels iptv',
      'global iptv lineup',
    ],
    channels: [
      { name: 'Al Jazeera English HD', quality: 'FHD 60FPS', genre: 'Global News', country: 'ME', description: 'International news coverage, investigations, and global current affairs.' },
      { name: 'MBC 1 HD', quality: 'FHD 60FPS', genre: 'Middle East', country: 'ME', description: 'Popular Middle Eastern entertainment, drama, and news channel.' },
      { name: 'Star Plus HD', quality: 'FHD 60FPS', genre: 'Indian Entertainment', country: 'IN', description: 'Leading Hindi entertainment channel with drama series and shows.' },
      { name: 'ARY Digital HD', quality: 'FHD 60FPS', genre: 'Pakistani Entertainment', country: 'PK', description: 'Popular Pakistani dramas, morning shows, and entertainment.' },
      { name: 'KBS World HD', quality: 'FHD 60FPS', genre: 'Korean TV', country: 'KR', description: 'South Korean dramas, K-pop, variety shows, and news.' },
      { name: 'NHK World Japan HD', quality: 'FHD 60FPS', genre: 'Japanese TV', country: 'JP', description: 'News, culture, and programming from Japan in English.' },
    ],
    faqs: [
      {
        question: 'Are international channels included in standard Dodo IPTV plans?',
        answer:
          'Yes. All regional and international categories are included in your Dodo IPTV subscription without needing separate add-on packs.',
      },
    ],
  },
];

export const getCategoryBySlug = (slug: string): ChannelCategory | undefined =>
  channelsData.find((cat) => cat.slug === slug);

export const getChannelCategoryBySlug = getCategoryBySlug;

export const getAllCategorySlugs = (): string[] =>
  channelsData.map((cat) => cat.slug);

export const getTotalChannelsCount = (): number =>
  channelsData.reduce((sum, cat) => sum + cat.totalChannels, 0);
import { Car } from '../models/car';

export const CARS: Car[] = [
  {
    id: 1,
    make: 'Pagani',
    model: 'Huayra',
    time: '01:13.8',
    trackCondition: '',
    series: 19,
    episode: 1,
    details: ''
  },
  {
    id: 2,
    make: 'Ariel',
    model: 'Atom V8 500',
    time: '01:15.1',
    trackCondition: 'moist',
    series: 16,
    episode: 1,
    details: ''
  },
  {
    id: 3,
    make: 'Noble',
    model: 'M600',
    time: '01:17.7',
    trackCondition: 'cold',
    series: 14,
    episode: 5,
    details: 'Foo'
  },
  {
    id: 4,
    make: 'Audi',
    model: 'R8 V10 ',
    time: '01:21.6',
    trackCondition: 'damp',
    series: 14,
    episode: 2,
    details: 'Foo'
  }
];


/*
 Qualifying vehicles[edit]
 Time	Vehicle	Episode
 01:13.8	Pagani Huayra	Series 19, Episode 1
 01:14.3	BAC Mono	Series 20, Episode 2
 01:15.1	Ariel Atom V8 500 (moist)	Series 16, Episode 1
 01:16.2	McLaren MP4-12C	Series 17, Episode 3
 01:16.5	Lamborghini Aventador LP700-4	Series 17, Episode 6
 01:16.8	Bugatti Veyron Super Sport	Series 15, Episode 5
 01:17.1	Gumpert Apollo S	Series 11, Episode 6
 01:17.3	Ascari A10	Series 10, Episode 9
 01:17.6	Koenigsegg CCX (with Top Gear Wing)	Series 8, Episode 4
 01:17.7	Noble M600 (cold)	Series 14, Episode 5
 01:17.8	Nissan GT-R (2012)	Series 17 Episode 4
 01:17.8	Pagani Zonda Roadster F (Clubsport Version)	Series 12, Episode 4
 01:17.9	Caterham Seven Superlight R500 (cold)	Series 12, Episode 6
 01:18.3	Bugatti Veyron 16.4	Series 12, Episode 4
 01:18.4	Pagani Zonda F	Series 7, Episode 4
 01:18.9	Maserati MC12	Series 6, Episode 2
 01:19.0	Lamborghini Murciélago LP670-4 SuperVeloce	Series 13, Episode 2
 01:19.0	Mercedes-Benz SLS AMG Black Series	Series 20, Episode 4
 01:19.0	Enzo Ferrari	Series 5, Episode 2
 01:19.1	Ferrari 458 Italia	Series 15, Episode 6
 01:19.5	Lamborghini Gallardo LP560-4	Series 12, Episode 1
 01:19.5	Porsche 997 GT2	Series 12, Episode 1
 01:19.5	Ariel Atom 2 300	Series 5, Episode 9
 01:19.6	Mercedes-Benz SLS AMG Roadster	Series 18, Episode 2
 01:19.7	Nissan GT-R	Series 11, Episode 05
 01:19.7	Ferrari 430 Scuderia	Series 11, Episode 01
 01:19.8	Ferrari 599 GTO	Series 16, Episode 2
 01:19.8	Lamborghini Murciélago LP640	Series 9, Episode 5
 01:19.8	Porsche Carrera GT	Series 4, Episode 4
 01:20.4	Chevrolet Corvette C6 ZR1 (damp)	Series 14, Episode 2
 01:20.4	Koenigsegg CCX (without Top Gear Wing)[2]	Series 8, Episode 1
 01:20.7	Ascari KZ1 (damp)	Series 7, Episode 1
 01:20.9	Mercedes-Benz SLR McLaren	Series 4, Episode 2
 01:21.0	Mercedes-Benz C63 AMG Black Series	Series 18, Episode 5
 01:21.2	Ferrari 599 GTB Fiorano	Series 10, Episode 3
 01:21.6	Audi R8 V10 (damp)	Series 14, Episode 2
 01:21.7	Mercedes-Benz SLS AMG Electric Drive	Series 20, Episode 4
 01:21.9	Ford GT	Series 4, Episode 8
 01:22.2	Porsche 911 Turbo Convertible	Series 15, Episode 4
 01:22.3	Caterham 620R (wet)	Series 21, Episode 4
 01:22.3	Audi R8 V10 Spyder	Series 15, Episode 4
 01:22.3	Ferrari 360 Challenge Stradale	Series 4, Episode 3
 01:22.3	Porsche 911 GT3 RS (996 mk.II)	Series 4, Episode 3
 01:22.4	Chevrolet Corvette C6 Z06	Series 8, Episode 2
 01:22.5	Noble M15	Series 8, Episode 8
 01:22.8	Lexus LFA (wet)[3]	Series 14, Episode 7
 01:22.9	Ferrari F430 F1	Series 6, Episode 8
 01:22.9	Porsche 911 Sport Classic	Series 15, Episode 2
 01:23.0	Mercedes-Benz SL65 AMG Black Series	Series 13, Episode 3
 01:23.1	KTM X-Bow (Not Shown on TV)[4] (Driven by first white Stig)	N/A
 01:23.1	Maserati Gran Turismo MC Stradale	Series 18, Episode 5
 01:23.1	Porsche 997 GT3	N/A
 01:23.2	Ferrari F430 Spider F1	Series 7, Episode 3
 01:23.3	Jaguar XKR-S	Series 17, Episode 4
 01:23.7	Lamborghini Murciélago (retested)	N/A
 01:23.8	Pagani Zonda C12 S 7.3 (partly damp)	Series 1, Episode 1
 01:23.9	Aston Martin DBS	Series 10, Episode 7
 01:23.9	Koenigsegg CC8S	Series 2, Episode 7
 01:24.0	Ariel Atom 1 220	Series 2, Episode 6
 01:24.2	Veritas RS III	Series 12, Episode 6
 01:24.3	Prodrive P2 (concept)	Series 8, Episode 5
 01:24.4	Audi R8 (damp)	Series 10, Episode 2
 01:24.4	Aston Martin Virage	Series 17, Episode 2
 01:24.6	TVR Sagaris	Series 6, Episode 7
 01:24.8	Alfa Romeo 4C	Series 21, Episode 2
 01:24.8	Mitsubishi Lancer Evolution VIII MR FQ-400(damp)	Series 5, Episode 7
 01:24.8	TVR Tuscan Mk.II	Series 6, Episode 3
 01:24.9	Bentley Continental Supersports[5]	Series 15, Episode 1
 01:24.9	Porsche Boxster Spyder	Series 15, Episode 2
 01:24.9	Mercedes-Benz E63 AMG	Series 15, Episode 3
 01:25.0	Noble M12 GTO-3R	Series 1, Episode 2
 01:25.0	BMW 1 Series M Coupe (damp)	Series 17, Episode 1
 01:25.0	Caterham R400	Series 2, Episode 6
 01:25.1	BMW M135i	Series 21, Episode 5
 01:25.1	Lotus Exige S	Series 8, Episode 3
 01:25.3	Porsche Panamera turbo	Series 15, Episode 3
 01:25.3	BMW M3 (E90 Saloon)	Series 10, Episode 10
 01:25.4	Ford GT40	Series 5, Episode 8
 01:25.7	Lotus Evora	Series 13, Episode 1
 01:25.7	Audi RS4[6]	Series 7, Episode 2
 01:25.7	Lamborghini Gallardo Spyder	Series 8, Episode 7
 01:25.8	Lamborghini Gallardo (wet)	Series 3, Episode 4
 01:25.9	Morgan Aero 8 GTN	Series 5, Episode 5
 01:26.0	Mercedes-Benz CLK 63 AMG Black series	Series 11, Episode 2
 01:26.0	BMW Z4 M roadster (E85)	Series 8, Episode 4
 01:26.0	Noble M400 (Shown on Top Gear Revved Up DVD)	N/A
 01:26.0	Mitsubishi Lancer Evolution VIII MR FQ320	Series 4, Episode 4
 01:26.2	BMW M5 (E60)	Series 6, Episode 9
 01:26.2	Porsche 911 Carrera S (997) (damp)	Series 10, Episode 2
 01:26.2	Brabus S Biturbo Roadster	Series 9, Episode 4
 01:26.3	Vauxhall VXR8 Bathurst S	Series 13, Episode 7
 01:26.4	Lotus Exige (mildly moist)	Series 4, Episode 1
 01:26.5	BMW M3 E92 Competition Pack (moist)	Series 16, Episode 5
 01:26.7	Porsche Cayman S[6]	Series 7, Episode 2
 01:26.7	Jaguar XFR	Series 13, Episode 5
 01:26.8	Chevrolet Corvette C6 LS2	Series 4, Episode 10
 01:26.8	Aston Martin V12 Vantage (Not Shown on TV)[4]	N/A
 01:26.8	Ferrari 575M Maranello GTC	Series 5, Episode 4
 01:26.9	Lexus IS-F	Series 12, Episode 5
 01:26.9	Mercedes-Benz CLS55 AMG	Series 6, Episode 1
 01:27.0	BMW M5 E39	N/A
 01:27.0	KTM X-Bow (Driven by new Stig)	N/A
 01:27.1	Aston Martin Vanquish S	Series 5, Episode 4
 01:27.1	Aston Martin DB9	Series 4, Episode 1
 01:27.1	HSV Maloo	Series 13, Episode 7
 01:27.2	Porsche 911 GT3 (996) (very wet)	Series 3, Episode 1
 01:27.2	Tesla Roadster (mildly moist)	Series 12, Episode 7
 01:27.3	Spyker C8 Spyder (with hard top)	Series 4, Episode 7
 01:27.4	Aston Martin DBS (wet)	Series 10, Episode 7
 01:27.5	Audi RS5 (moist)	Series 16, Episode 5
 01:27.5	Nissan 370Z GT	Series 13, Episode 6
 01:27.5	TVR T350C	Series 2, Episode 10
 01:27.7	Cosworth Impreza STI CS400 (wet)	Series 16, Episode 3
 01:27.7	Renault Mégane RenaultSport Cup 265	Series 19, Episode 4
 01:27.9	Wiesmann MF 3	Series 6, Episode 3
 01:27.9	Chevrolet Camaro SS	Series 15, Episode 3
 01:28.0	Roush Mustang	Series 9, Episode 6
 01:28.0	BMW M3 CSL (E46) (wet)[7]	Series 3, Episode 2
 01:28.1	Renault Mégane R26.R	Series 13, Episode 4
 01:28.2	BMW Z4 sDrive35i (E89)	Series 13, Episode 6
 01:28.2	BMW X5 M (E70) (wet)	Series 14, Episode 4
 01:28.2	Marcos TSO GT2	Series 7, Episode 5
 01:28.2	Lotus Elise Sport 190	Series 2, Episode 6
 01:28.2	Subaru Impreza WRX STI	Series 11, Episode 2
 01:28.22	Mitsubishi Lancer Evolution X FQ-300	Series 11, Episode 2
 01:28.3	Vauxhall Astra VXR	Series 19, Episode 4
 01:28.5	Dodge Viper SRT-10 (very wet)	Series 5, Episode 3
 01:28.6	Volkswagen Golf GTI Mk7 (with performance pack)	Series 21, Episode 5
 01:28.6	MG XPower SV	Series 3, Episode 7
 01:28.7	Porsche Boxster S	Series 8, Episode 4
 01:28.7	Audi TT MTM Bimoto (cold tyres)	Series 1, Episode 10
 01:28.9	Mitsubishi Lancer Evolution VIII MR FQ-300	Series 2, Episode 6
 01:28.9	Porsche 997 Carrera S (very wet)	N/A
 01:29.0	Mercedes-Benz CL65 AMG	Series 4, Episode 9
 01:29.0	Lamborghini Murciélago (partly damp)	Series 1, Episode 1
 01:29.0	Alpina Z8 Roadster	Series 2, Episode 3
 01:29.2	BMW M5 (F10) (Very Wet)	Series 18, Episode 7
 01:29.3	Ford Focus RS Mk II	Series 13, Episode 4
 01:29.4	Subaru Impreza WRX STI WR1	Series 4, Episode 4
 01:29.4	Range Rover Sport	Series 20, Episode 6
 01:29.6	Volkswagen Golf GTI Mk VII (Sport Mode)	Series 20, Episode 3
 01:29.6	Volkswagen Golf GTI W12-650 Concept	Series 10, Episode 1
 01:29.6	Ford Focus ST	Series 19, Episode 4
 01:29.9	Zenvo ST1 (very wet)	Series 21, Episode 3
 01:30.0	Autodelta Alfa Romeo 147 GTA 3.7	N/A
 01:30.0	Ford Shelby GT500	Series 9, Episode 6
 01:30.1	Subaru Impreza WRX STi	Series 2, Episode 6
 01:30.1	Vauxhall Monaro VXR	Series 6, Episode 11
 01:30.3	Alfa Romeo Giulietta Quadrifoglio Verde	N/A
 01:30.4	Aston Martin DB7 GT (with full tank of fuel)	Series 2, Episode 4
 01:30.4	Volkswagen Golf R32 mk.V	Series 7, Episode 6
 01:30.8	Focus RS 500 (wet)	Series 16, Episode 3
 01:30.9	Audi S4 quattro 4.2	Series 2, Episode 2
 01:31.0	Vauxhall Corsa VXR Nurburgring (partly snowy)	Series 18, Episode 3
 01:31.0	Porsche 996 Turbo (wet)	Series 2, Episode 5
 01:31.2	BMW 760Li (wet)	Series 14, Episode 1
 01:31.3	Vauxhall VX220 Turbo	Series 2, Episode 6
 01:31.3	Vauxhall VXR8 (wet)	Series 10, Episode 8
 01:31.3	Toyota GT86 (partly wet)	Series 19, Episode 3
 01:31.4	Audi TT Mk.II 2.0T	Series 9, Episode 2
 01:31.6	Honda NSX-R (wet)	Series 3, Episode 9
 01:31.8	BMW M3 E46	Series 2, Episode 2
 01:31.8	BMW 535d	Series 6, Episode 10
 01:31.8	Nissan 350Z	Series 3, Episode 5
 01:31.8	Mazda RX-8	Series 3, Episode 5
 01:31.9	BMW 130i (E87)	Series 7, Episode 6
 01:32.0	Renaultsport Clio 200T	Series 20, Episode 1
 01:32.7	Ford Fiesta ST	Series 20, Episode 1
 01:33.2	Peugeot 208 GTi	Series 20, Episode 1
 01:32.1	Mercedes-Benz S63 AMG (wet)	Series 14, Episode 1
 01:32.2	Ford Focus RS Mk I	Series 1, Episode 2
 01:32.2	Mazda 6 MPS	Series 8, Episode 6
 01:32.5	Renaultsport Mégane 225 Cup	N/A
 01:32.5	Lotus Esprit V8 (cold tyres)	Series 1, Episode 10
 01:32.7	Audi TT 3.2 quattro	N/A
 01:32.8	Honda Civic Type-R (2004 Facelift)	Series 5, Episode 6
 01:32.8	Jaguar E-Type (modernised)	Series 6, Episode 5
 01:32.9	SEAT León Cupra R	Series 5, Episode 6
 01:32.9	Mercedes-Benz SLK350	Series 5, Episode 7
 01:33.0	Audi RS6 (very wet)	Series 1, Episode 8
 01:33.0	Vauxhall Astra VXR	Series 6, Episode 9
 01:33.0	Mercedes-Benz SL55 AMG (owned by Jeremy Clarkson at the time) (very wet)	Series 1, Episode 6
 01:33.1	Noble M12 GTO (wet)	Series 1, Episode 2
 01:33.2	Audi Q7 V12 (wet)	Series 14, Episode 4
 01:33.3	Volkswagen Golf Mk.IV R32	Series 1, Episode 9
 01:33.4	Cadillac CTS-V First Generation (very wet)	Series 6, Episode 4
 01:33.5	Honda Civic Type-R (FN2-2007)	Series 10, Episode 6
 01:33.5	SEAT Leon Cupra Mk2	N/A
 01:33.7	MG ZT 260	Series 4, Episode 5
 01:33.7	Volkswagen Golf Mk.V GTI	Series 5, Episode 6
 01:33.7	2002 Honda NSX (very wet)	Series 1, Episode 6
 01:33.8	Clio Renault Sport 182	Series 4, Episode 6
 01:33.9	Holden Monaro (written as Loser) (wet)	Series 3, Episode 6
 01:34.0	Renault Mégane 225	Series 5, Episode 6
 01:34.0	Renault Clio 200 Cup (Not Shown on TV)[4]	N/A
 01:34.2	MINI Cooper S Works	Series 5, Episode 6
 01:34.2	Ford Mondeo ST220	Series 8, Episode 6
 01:34.7	Jaguar XKR (melted snow)	Series 9, Episode 1
 01:34.9	Ford Focus ST (wet)	Series 7, Episode 3
 01:35.0	Volvo S60 R	Series 2, Episode 9
 01:35.2	Ferrari 575M Maranello (very wet)	Series 1, Episode 4
 01:35.3	Vauxhall Vectra VXR	Series 8, Episode 6
 01:35.4	Renault Avantime (tuned by presenters)	Series 12, Episode 3
 01:35.5	Fiat 500 Abarth Essesse SS	Series 12, Episode 2
 01:35.5	Mercedes-Benz E55 AMG (very wet)	Series 1, Episode 8
 01:35.6	Alfa Romeo 147 GTA	Series 2, Episode 8
 01:35.6	Lotus Elise (wet)	N/A
 01:35.8	Citroën C4 VTS	Series 5, Episode 6
 01:36.2	Aston Martin Vanquish (very wet)	Series 1, Episode 4
 01:36.2	Renault Clio V6 Sport (very wet, spin before finishline)	Series 2, Episode 5
 01:36.9	Alfa Romeo Brera 2.2	Series 9, Episode 2
 01:37.0	Mercedes-Benz SL500 (Ronnie O'Sullivan's)	Series 4, Episode 4
 01:37.0	Porsche Boxster (very wet)	Series 3, Episode 2
 01:37.3	BMW Z4 3.0i (very wet) (E85)	Series 3, Episode 2
 01:37.4	Honda S2000 (very wet)	Series 3, Episode 2
 01:37.9	Saab 9-5 Aero	Series 3, Episode 3
 01:38.0	Maserati 4200 GT (very wet)	N/A
 01:38.06	Honda Civic Type-R (EP3)	N/A
 01:38.2	Alfa Romeo 8C Competizione (very wet)	Series 11, Episode 4
 01:39.0	Subaru Impreza WRX (Europe-spec)	N/A
 01:39.4	Bowler Wildcat	Series 2, Episode 1
 01:40.4	Morgan 3 Wheeler	Series 18, Episode 6
 01:40.8	Bentley Arnage T (wet)	Series 1, Episode 5
 01:41.?	Ford Mondeo 2.0i	Series 1, Episode 4
 01:42.5	"Modified" Renault Avantime	Series 12, Episode 3
 01:43.2	BMW 318i (E46)	Series 1, Episode 4
 01:44.0	Overfinch 580 S (very wet)	Series 2, Episode 10
 01:45.5	Caterham 160 (wet)	Series 21, Episode 4
 01:46.0	Aston Martin DB5	Series 6, Episode 5
 01:48.2	Hawk HF3000 (wet) (Kit car with Alfa Romeo V6 engine – spun twice during timed lap)	Series 14, Episode 3
 01:50.3	Spitfire Bentley	Series 18, Episode 6
 02:02.5	Brutus	Series 18, Episode 6
 18:37.0	Porsche Pain Au Chocolat (Foot pedalled by Richard Hammond)	Series 15, Episode 5
 DNF	Porsche 959 (Broke down during lap)	Series 16, Episode 6
 DNF	Reliant Robin (Rolled on the first corner)	Series 15, Episode 2
 DNS	Ferrari F40 (Car did not start; Broke down at the start line)	Series 16, Episode 6
 Non-qualifying Vehicles[edit]
 Tested, but subsequently removed from board[edit]
 0:31.2 – BAE Sea Harrier[8] (Piloted by Lieutenant Nick Arkle RN.[9] Raced against the Saab 9-5 Aero.
 Took off then flew around track, ended in the air)
 0:59.0 – Renault R24 Formula One car[10] (Wet)
 1:03.8 – Lotus T125
 1:08.5 – Pagani Zonda R[11]
 1:08.6 – Aston Martin DBR9[12]
 1:10.6 – Caparo T1[13]
 1:10.7 – Ferrari FXX[14] (Driven by Michael Schumacher on slick tyres)
 1:14.0 – Lamborghini Sesto Elemento
 – CAP 232 Aerobatic Plane[15] (Piloted by British Aerobatic Champion, Tom Cassells.[16] Raced against
 the Radical SR3 and was shown crossing the finish line in front, however the time was not shown.)
 1:19.1 – Radical SR3[15]
 1:22.6 – Westfield XTR2[17]
 Driven to establish times in challenges[edit]
 1:35.9 – 2010 BMW 325i (E93) (Driven as modern-day equivalent to set target time for the late
 '80s BMW 325i (E30)s in the '4-seat convertibles for under £2,000' challenge.) (wet, top open)
 1:42.0 – Rover 416 GTI (Hammond's car in the '£100 car' challenge.)
 1:43.0 – Porsche 944 (May's car in the '£1500 Porsche' Challenge.)
 – Porsche 924 (Hammond's car in '£1500 Porsche' Challenge, time was not said but they
 did say it was slower than May's 944.)
 1:45.0 – Porsche 928 (Clarkson's car in '£1500 Porsche' Challenge.)
 1:46.0 – Audi 80 1.8E (May's car in '£100 car' challenge.)
 1:48.0 – Volvo 760 GLE V6 (Clarkson's car in '£100 car' challenge.)
 1:48.0 – Vauxhall Astra Diesel Police car (Driven as modern-day equivalent to set target time
 in 'Budget Police Car' challenge.)
 1:48.0 – 1988 BMW 325i (E30) convertible (Clarkson's car in '4-seat convertibles for
 under £2,000' challenge, automatic and paving slab in boot. Driven by Clarkson.)
 1:55.3 – 1987 BMW 325i (E30) convertible (Hammond's car in '4-seat convertibles for
 under £2,000' challenge, lowered suspension. Driven by Hammond.)
 1:55.4 – 1989 BMW 325i (E30) convertible (May's car in '4-seat convertibles for
 under £2,000' challenge, standard specification. Driven by May.)
 2:00.0 – Lexus LS400 (May's police car in 'Budget Police Car' Challenge, driven by May.)
 2:08.0 – Fiat Coupé 2.0 20v Turbo (Clarkson's police car in 'Budget Police Car'
 Challenge, driven by Clarkson.)
 2:57.0 – JCB Fastrac 8250 (Clarkson's tractor in the 'Tractor' Challenge.)
 3:14.0 – Suzuki Vitara 1.6 JLX (Hammond's police car in 'Budget Police Car' Challenge,
 driven by Hammond. Hammond left the track to drive through piled cardboard boxes, and increase his "style points".)
 3:28.4 – Fendt 930 Vario (May's tractor in the 'Tractor' Challenge.)
 4:49.0 – Case STX Steiger (Hammond's tractor in the 'Tractor' Challenge.)

 */

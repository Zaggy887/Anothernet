import { useEffect, useMemo, useState } from 'react';
import { Briefcase, TrendingUp, ArrowRight, Filter, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { supabase } from '../lib/supabase';
import { Mandate } from '../types';

const SEED_MANDATES: Partial<Mandate>[] = [
  // Existing 30 ---------------------------------
  {
    title: 'SaaS Platform Seeking Series B',
    deal_type: 'Capital Raising',
    sector: 'Technology',
    deal_size: '$20M – $30M',
    status: 'Active',
    description:
      'Fast-growing enterprise software company with $15M ARR seeking $25M Series B to accelerate GTM and product.',
    created_at: '2025-07-01T09:00:00Z',
  },
  {
    title: 'Manufacturing Acquisition Target',
    deal_type: 'M&A Advisory',
    sector: 'Manufacturing',
    deal_size: '$40M – $50M',
    status: 'Active',
    description:
      'Stable precision components supplier with strong EBITDA margins seeking strategic sale or majority recap.',
    created_at: '2025-06-22T09:00:00Z',
  },
  {
    title: 'Distribution Partnership – Healthcare Tech',
    deal_type: 'Strategic Partnerships',
    sector: 'Healthcare',
    deal_size: 'N/A',
    status: 'Active',
    description:
      'Medical device innovator seeking distribution partners in SEA with existing hospital networks.',
    created_at: '2025-06-19T09:00:00Z',
  },
  {
    title: 'Climate Analytics – Growth Equity',
    deal_type: 'Capital Raising',
    sector: 'Climate Tech',
    deal_size: '$30M – $35M',
    status: 'Pending',
    description:
      'B2B climate risk analytics platform raising growth equity to expand to EU utilities and insurers.',
    created_at: '2025-06-12T09:00:00Z',
  },
  {
    title: 'AI Agent Infra – Strategic Buyer',
    deal_type: 'Sell-Side M&A',
    sector: 'Technology',
    deal_size: '$80M – $120M',
    status: 'Active',
    description:
      'Dev tooling for LLM agents; 900 enterprise logos. Exploring strategic sale to hyperscaler ecosystem partner.',
    created_at: '2025-06-10T09:00:00Z',
  },
  {
    title: 'Solar EPC Roll-Up',
    deal_type: 'Buy-Side M&A',
    sector: 'Energy',
    deal_size: '$50M+ program',
    status: 'Active',
    description:
      'Sponsor-backed platform assembling regional EPC firms to achieve scale and procurement leverage.',
    created_at: '2025-06-05T09:00:00Z',
  },
  {
    title: 'API-First Bank Data – Series A (Closed)',
    deal_type: 'Capital Raising',
    sector: 'Financial Services',
    deal_size: '$18M (closed)',
    status: 'Closed',
    description:
      'Open banking API provider; round led by top fintech VC with participation from strategic banks.',
    created_at: '2025-05-28T09:00:00Z',
  },
  {
    title: 'D2C Wellness Brand – Minority Sale',
    deal_type: 'Secondary / Partial Exit',
    sector: 'Consumer',
    deal_size: '$25M – $35M',
    status: 'Pending',
    description:
      'High-margin wellness brand with strong subscription metrics; founder seeking partial liquidity.',
    created_at: '2025-05-24T09:00:00Z',
  },
  {
    title: 'Maritime Logistics Network JV',
    deal_type: 'Joint Venture',
    sector: 'Logistics',
    deal_size: '$60M JV',
    status: 'Active',
    description:
      'Regional port operator exploring JV with 3PL for integrated cold-chain services across 4 hubs.',
    created_at: '2025-05-21T09:00:00Z',
  },
  {
    title: 'AI Radiology Assist – Strategic Distribution',
    deal_type: 'Strategic Partnerships',
    sector: 'Healthcare',
    deal_size: 'N/A',
    status: 'Closed',
    description:
      'Signed distribution with multinational imaging OEM to bundle workflow AI with PACS deployments.',
    created_at: '2025-05-18T09:00:00Z',
  },
  {
    title: 'EV Charging OS – Series A',
    deal_type: 'Capital Raising',
    sector: 'Climate Tech',
    deal_size: '$12M – $15M',
    status: 'Active',
    description:
      'OS for multi-vendor chargers; raising to expand utility integrations and payments.',
    created_at: '2025-05-10T09:00:00Z',
  },
  {
    title: 'Industrial IoT Edge – Asset Sale',
    deal_type: 'Sell-Side M&A',
    sector: 'Manufacturing',
    deal_size: '$22M – $28M',
    status: 'Closed',
    description:
      'Sale of edge gateway IP and contracts to global automation player completed.',
    created_at: '2025-05-05T09:00:00Z',
  },
  {
    title: 'Cyber Insurtech – Reinsurance Partner',
    deal_type: 'Strategic Partnerships',
    sector: 'Financial Services',
    deal_size: 'Capacity program',
    status: 'Pending',
    description:
      'Cyber MGA seeking panel expansion with "follow" capacity and data-sharing partnership.',
    created_at: '2025-04-29T09:00:00Z',
  },
  {
    title: 'Agri Robotics – Series Seed+',
    deal_type: 'Capital Raising',
    sector: 'Industrial Tech',
    deal_size: '$6M – $8M',
    status: 'Active',
    description:
      'Autonomous harvesting robots; pilots completed with two top producers.',
    created_at: '2025-04-24T09:00:00Z',
  },
  {
    title: 'Payments ISO Roll-Up',
    deal_type: 'Buy-Side M&A',
    sector: 'Financial Services',
    deal_size: '$100M+ program',
    status: 'Active',
    description:
      'Platform consolidating ISOs/PayFacs to build scale and improve take rate economics.',
    created_at: '2025-04-18T09:00:00Z',
  },
  {
    title: 'Security Awareness SaaS – Acquisition (Closed)',
    deal_type: 'Sell-Side M&A',
    sector: 'Technology',
    deal_size: '$55M (closed)',
    status: 'Closed',
    description:
      'Sold to global security vendor; cross-sell unlocked 2x ARR in 6 months.',
    created_at: '2025-04-12T09:00:00Z',
  },
  {
    title: 'ESG Data Marketplace – Strategic Investor',
    deal_type: 'Capital Raising',
    sector: 'Climate Tech',
    deal_size: '$10M – $12M',
    status: 'Pending',
    description:
      'Marketplace connecting corporates and suppliers; seeking strategic with distribution.',
    created_at: '2025-04-08T09:00:00Z',
  },
  {
    title: 'FoodTech Co-Manufacturing Expansion',
    deal_type: 'Project Finance',
    sector: 'Consumer',
    deal_size: '$35M CapEx',
    status: 'Active',
    description:
      'Greenfield co-man facility to meet retail demand; anchored by multi-year supply contracts.',
    created_at: '2025-04-02T09:00:00Z',
  },
  {
    title: 'Telematics Platform – Carve-Out',
    deal_type: 'Carve-Out / Divestiture',
    sector: 'Industrial Tech',
    deal_size: '$70M – $95M',
    status: 'Active',
    description:
      'Corporate carve-out of non-core telematics division with valuable OEM integrations.',
    created_at: '2025-03-27T09:00:00Z',
  },
  {
    title: 'Green Hydrogen EPC Consortium',
    deal_type: 'Consortium / JV',
    sector: 'Energy',
    deal_size: '$150M+ program',
    status: 'Pending',
    description:
      'EPC consortium formation to bid on two 20MW electrolyzer projects in MENA.',
    created_at: '2025-03-20T09:00:00Z',
  },
  {
    title: 'AI Underwriting Platform – Strategic Investor',
    deal_type: 'Strategic Partnerships',
    sector: 'Financial Services',
    deal_size: '$25M',
    status: 'Active',
    description: 'ML underwriting API for insurers; seeking strategic capacity partners.',
    created_at: '2025-02-12T09:00:00Z',
  },
  {
    title: 'Vertical Farming Roll-Up',
    deal_type: 'Buy-Side M&A',
    sector: 'AgriTech',
    deal_size: '$50M program',
    status: 'Pending',
    description:
      'PE sponsor acquiring regional vertical farming operators for scale efficiencies.',
    created_at: '2025-02-01T09:00:00Z',
  },
  {
    title: 'Green Data Centre Development',
    deal_type: 'Project Finance',
    sector: 'Infrastructure',
    deal_size: '$200M CapEx',
    status: 'Active',
    description: 'Renewable-powered data centre operator raising project equity.',
    created_at: '2025-01-25T09:00:00Z',
  },
  {
    title: 'Telehealth Platform Expansion',
    deal_type: 'Capital Raising',
    sector: 'Healthcare',
    deal_size: '$15M – $20M',
    status: 'Active',
    description: 'Digital clinic network raising funds for chronic care expansion.',
    created_at: '2025-01-18T09:00:00Z',
  },
  {
    title: 'Retail Marketplace Consolidation',
    deal_type: 'Buy-Side M&A',
    sector: 'Consumer',
    deal_size: '$90M program',
    status: 'Pending',
    description: 'Aggregator acquiring D2C marketplaces for logistics and payments integration.',
    created_at: '2025-01-02T09:00:00Z',
  },
  {
    title: 'Clean Hydrogen Startup – Seed Round',
    deal_type: 'Capital Raising',
    sector: 'Climate Tech',
    deal_size: '$5M Seed',
    status: 'Active',
    description: 'Hydrogen catalyst tech for industrial decarbonisation.',
    created_at: '2024-12-20T09:00:00Z',
  },
  {
    title: 'EV Fleet Financing Platform',
    deal_type: 'Strategic Partnership',
    sector: 'Energy',
    deal_size: '$25M Facility',
    status: 'Active',
    description: 'EV leasing and SaaS platform partnering with financiers for expansion.',
    created_at: '2024-12-05T09:00:00Z',
  },
  {
    title: 'MedTech Imaging Device Exit',
    deal_type: 'Sell-Side M&A',
    sector: 'Healthcare',
    deal_size: '$45M (closed)',
    status: 'Closed',
    description: 'Imaging device IP sold to US diagnostics group.',
    created_at: '2024-11-15T09:00:00Z',
  },
  {
    title: 'Cybersecurity Roll-Up – APAC',
    deal_type: 'Buy-Side M&A',
    sector: 'Technology',
    deal_size: '$150M program',
    status: 'Active',
    description: 'Sponsor-backed program acquiring cybersecurity MSPs across APAC.',
    created_at: '2024-11-01T09:00:00Z',
  },
  {
    title: 'Agri Drone Analytics Platform',
    deal_type: 'Capital Raising',
    sector: 'AgriTech',
    deal_size: '$10M Series A',
    status: 'Pending',
    description: 'Drone imagery analytics for yield optimization.',
    created_at: '2024-10-20T09:00:00Z',
  },

  // 🔥 25 NEW ENTRIES BELOW ---------------------------------
  {
    title: 'Digital Wealth Platform – Series C',
    deal_type: 'Capital Raising',
    sector: 'Financial Services',
    deal_size: '$60M',
    status: 'Active',
    description: 'Australia-based robo-advisor expanding to Asia with institutional backing.',
    created_at: '2025-07-10T09:00:00Z',
  },
  {
    title: 'AI Defence Systems Integration',
    deal_type: 'Sell-Side M&A',
    sector: 'Defence Tech',
    deal_size: '$75M – $90M',
    status: 'Active',
    description: 'AI-enabled situational awareness provider exploring strategic acquisition.',
    created_at: '2025-06-30T09:00:00Z',
  },
  {
    title: 'Smart Grid Battery Network',
    deal_type: 'Project Finance',
    sector: 'Energy',
    deal_size: '$220M CapEx',
    status: 'Pending',
    description: 'Distributed battery storage developer raising project equity across NSW and VIC.',
    created_at: '2025-06-15T09:00:00Z',
  },
  {
    title: 'Agribusiness SaaS – Series A',
    deal_type: 'Capital Raising',
    sector: 'AgriTech',
    deal_size: '$15M',
    status: 'Active',
    description: 'Farm analytics and credit scoring platform raising growth funding for APAC.',
    created_at: '2025-06-01T09:00:00Z',
  },
  {
    title: 'Healthcare AI Diagnostics JV',
    deal_type: 'Joint Venture',
    sector: 'Healthcare',
    deal_size: '$50M JV',
    status: 'Pending',
    description: 'Joint venture to deploy AI radiology diagnostics across regional hospitals.',
    created_at: '2025-05-22T09:00:00Z',
  },
  {
    title: 'PropTech Platform – Series B',
    deal_type: 'Capital Raising',
    sector: 'Property Tech',
    deal_size: '$25M',
    status: 'Active',
    description: 'Property management SaaS automating tenant payments and compliance workflows.',
    created_at: '2025-05-15T09:00:00Z',
  },
  {
    title: 'Digital Bank Core System Sale',
    deal_type: 'Sell-Side M&A',
    sector: 'Technology',
    deal_size: '$65M (negotiating)',
    status: 'Pending',
    description: 'Core banking infrastructure provider fielding acquisition offers from global vendors.',
    created_at: '2025-05-10T09:00:00Z',
  },
  {
    title: 'Recycling & Waste Processing Expansion',
    deal_type: 'Project Finance',
    sector: 'Infrastructure',
    deal_size: '$80M CapEx',
    status: 'Active',
    description: 'New materials recovery facilities in VIC and QLD seeking debt and equity partners.',
    created_at: '2025-04-25T09:00:00Z',
  },
  {
    title: 'AI Logistics Optimisation Startup',
    deal_type: 'Capital Raising',
    sector: 'Logistics',
    deal_size: '$9M – $12M',
    status: 'Active',
    description: 'Route and warehouse AI engine improving fleet utilization by 25%.',
    created_at: '2025-04-18T09:00:00Z',
  },
  {
    title: 'EdTech Microlearning App – Seed+',
    deal_type: 'Capital Raising',
    sector: 'Education',
    deal_size: '$3M – $5M',
    status: 'Active',
    description: 'Microlearning platform for universities expanding into Asia-Pacific.',
    created_at: '2025-04-10T09:00:00Z',
  },
  {
    title: 'Data Centre Cooling JV',
    deal_type: 'Joint Venture',
    sector: 'Infrastructure',
    deal_size: '$100M JV',
    status: 'Pending',
    description: 'Engineering partnership for sustainable immersion cooling systems in hyperscale data centres.',
    created_at: '2025-04-01T09:00:00Z',
  },
  {
    title: 'Luxury Beverage Brand Partial Sale',
    deal_type: 'Secondary / Partial Exit',
    sector: 'Consumer',
    deal_size: '$28M',
    status: 'Pending',
    description: 'Australian-owned premium spirit brand seeking minority investor for APAC expansion.',
    created_at: '2025-03-22T09:00:00Z',
  },
  {
    title: 'Marine Renewable Energy Project',
    deal_type: 'Project Finance',
    sector: 'Energy',
    deal_size: '$180M CapEx',
    status: 'Active',
    description: 'Wave energy pilot projects targeting commercial-scale deployment off WA coast.',
    created_at: '2025-03-10T09:00:00Z',
  },
  {
  title: 'AI Chip Design Platform – Series B',
  deal_type: 'Capital Raising',
  sector: 'Technology',
  deal_size: '$40M – $55M',
  status: 'Active',
  description:
    'Custom silicon automation tools enabling faster edge AI deployment across robotics and automotive.',
  created_at: '2025-07-14T09:00:00Z',
},
{
  title: 'Defence-Grade Drone Avionics Exit',
  deal_type: 'Sell-Side M&A',
  sector: 'Defence Tech',
  deal_size: '$120M – $150M',
  status: 'Active',
  description:
    'Critical flight control systems with NATO certifications; receiving bids from Tier 1 contractors.',
  created_at: '2025-07-13T09:00:00Z',
},
{
  title: 'Oncology Data Exchange – Series C',
  deal_type: 'Capital Raising',
  sector: 'Healthcare',
  deal_size: '$85M',
  status: 'Pending',
  description:
    'Interoperability network accelerating clinical trials recruitment with pharma sponsors onboard.',
  created_at: '2025-07-12T09:00:00Z',
},
{
  title: 'Solar O&M Platform Roll-Up',
  deal_type: 'Buy-Side M&A',
  sector: 'Energy',
  deal_size: '$150M program',
  status: 'Active',
  description:
    'PE-backed platform targeting fragmented solar maintenance operators to build national footprint.',
  created_at: '2025-07-11T09:00:00Z',
},
{
  title: 'Advanced EV Battery Recycling',
  deal_type: 'Project Finance',
  sector: 'Climate Tech',
  deal_size: '$200M CapEx',
  status: 'Active',
  description:
    'Hydrometallurgical facility processing lithium battery waste for OEM recovery programs.',
  created_at: '2025-07-10T09:00:00Z',
},
{
  title: 'FinCrime Risk Intelligence JV',
  deal_type: 'Joint Venture',
  sector: 'Financial Services',
  deal_size: '$30M JV',
  status: 'Pending',
  description:
    'Bank-led data consortium forming shared KYC and AML AI capabilities across SEA.',
  created_at: '2025-07-08T09:00:00Z',
},
{
  title: 'Precision CNC Contract Manufacturer Exit',
  deal_type: 'Sell-Side M&A',
  sector: 'Manufacturing',
  deal_size: '$45M – $60M',
  status: 'Active',
  description:
    'Aviation-certified machining supplier with backlog visibility and >20% EBITDA margins.',
  created_at: '2025-07-07T09:00:00Z',
},
{
  title: 'Healthcare Scheduling SaaS – Series A',
  deal_type: 'Capital Raising',
  sector: 'Healthcare',
  deal_size: '$18M – $22M',
  status: 'Active',
  description:
    'Automated clinician rostering tool with deep hospital integrations and EU expansion.',
  created_at: '2025-07-06T09:00:00Z',
},
{
  title: 'AI Border Security System',
  deal_type: 'Strategic Partnerships',
  sector: 'Defence Tech',
  deal_size: '$75M Technology Program',
  status: 'Active',
  description:
    'Autonomous surveillance towers and analytics; seeking deployment partners globally.',
  created_at: '2025-07-05T09:00:00Z',
},
{
  title: 'Hydrogen Refuelling Infrastructure JV',
  deal_type: 'Consortium / JV',
  sector: 'Energy',
  deal_size: '$260M JV',
  status: 'Pending',
  description:
    'Consortium forming to roll out heavy-fleet hydrogen stations across freight corridors.',
  created_at: '2025-07-04T09:00:00Z',
},
{
  title: 'Banking-as-a-Service Exit',
  deal_type: 'Sell-Side M&A',
  sector: 'Financial Services',
  deal_size: '$90M – $110M',
  status: 'Pending',
  description:
    'Reg-compliant embedded banking platform with multi-market licensing.',
  created_at: '2025-07-03T09:00:00Z',
},
{
  title: 'Smart Factory Robotics Distributor',
  deal_type: 'Buy-Side M&A',
  sector: 'Manufacturing',
  deal_size: '$70M Program',
  status: 'Active',
  description:
    'Industrial automation roll-up targeting high-margin regional integrators.',
  created_at: '2025-07-02T09:00:00Z',
},
{
  title: 'Climate Insurance Parametrics',
  deal_type: 'Capital Raising',
  sector: 'Climate Tech',
  deal_size: '$25M – $35M',
  status: 'Active',
  description:
    'Weather-indexed insurance platform scaling with reinsurance backers.',
  created_at: '2025-07-01T09:00:00Z',
},
{
  title: 'Hospital Command Centre AI – Series B',
  deal_type: 'Capital Raising',
  sector: 'Healthcare',
  deal_size: '$50M',
  status: 'Pending',
  description:
    'Real-time capacity AI deployed across 12 health networks improving ED throughput.',
  created_at: '2025-06-30T09:00:00Z',
},
{
  title: 'GPU Hosting Provider – Strategic Buyout',
  deal_type: 'Sell-Side M&A',
  sector: 'Technology',
  deal_size: '$150M – $200M',
  status: 'Active',
  description:
    'Data centre GPU clusters for model training; hyperscaler interest.',
  created_at: '2025-06-29T09:00:00Z',
},
{
  title: 'Neobank Credit Expansion Facility',
  deal_type: 'Strategic Partnerships',
  sector: 'Financial Services',
  deal_size: '$75M Facility',
  status: 'Active',
  description:
    'Digital bank forming strategic credit warehouse with institutional lenders.',
  created_at: '2025-06-28T09:00:00Z',
},
{
  title: 'Naval Composite Structures Acquisition',
  deal_type: 'Buy-Side M&A',
  sector: 'Defence Tech',
  deal_size: '$95M Program',
  status: 'Active',
  description:
    'Acquiring advanced composite suppliers for navy and aerospace platforms.',
  created_at: '2025-06-27T09:00:00Z',
},
{
  title: 'Waste-to-Fuel Refinery',
  deal_type: 'Project Finance',
  sector: 'Energy',
  deal_size: '$240M CapEx',
  status: 'Pending',
  description:
    'Advanced pyrolysis for SAF feedstock with contracted offtake agreements.',
  created_at: '2025-06-26T09:00:00Z',
},
{
  title: 'IoT Security Platform – Series A+',
  deal_type: 'Capital Raising',
  sector: 'Technology',
  deal_size: '$22M – $28M',
  status: 'Active',
  description:
    'Device identity and anomaly detection stack for regulated industries.',
  created_at: '2025-06-25T09:00:00Z',
},
{
  title: 'Industrial ERP Cloud Exit',
  deal_type: 'Sell-Side M&A',
  sector: 'Manufacturing',
  deal_size: '$55M – $65M',
  status: 'Pending',
  description:
    'Legacy ERP modernization platform with >95% net retention.',
  created_at: '2025-06-24T09:00:00Z',
},
{
  title: 'AI Claim Processing JV',
  deal_type: 'Strategic Partnerships',
  sector: 'Financial Services',
  deal_size: '$50M JV',
  status: 'Active',
  description:
    'Automated claims adjudication with insurers as go-to-market partners.',
  created_at: '2025-06-23T09:00:00Z',
},
{
  title: 'Digital Therapeutics Roll-Out',
  deal_type: 'Capital Raising',
  sector: 'Healthcare',
  deal_size: '$30M – $40M',
  status: 'Active',
  description:
    'Chronic condition DTx expanding reimbursement in US and UK.',
  created_at: '2025-06-22T09:00:00Z',
},
{
  title: 'Industrial Drone Solutions Exit',
  deal_type: 'Sell-Side M&A',
  sector: 'Industrial Tech',
  deal_size: '$60M – $75M',
  status: 'Pending',
  description:
    'Automated inspections across mining and utilities; >300 enterprise customers.',
  created_at: '2025-06-21T09:00:00Z',
},
{
  title: 'Aged Care Facilities Upgrade',
  deal_type: 'Project Finance',
  sector: 'Healthcare',
  deal_size: '$180M CapEx',
  status: 'Active',
  description:
    'PPP-backed upgrade of aged care facilities with ESG-linked financing.',
  created_at: '2025-06-20T09:00:00Z',
},
{
  title: 'Floating Wind Engineering IPO Prep',
  deal_type: 'Capital Raising',
  sector: 'Energy',
  deal_size: '$95M Pre-IPO',
  status: 'Pending',
  description:
    'Offshore wind foundation engineering specialist scaling into APAC.',
  created_at: '2025-06-19T09:00:00Z',
},
{
  title: 'GenAI Legal Ops Exit',
  deal_type: 'Sell-Side M&A',
  sector: 'Technology',
  deal_size: '$85M – $110M',
  status: 'Active',
  description:
    'Contract intelligence trained on 5M legal docs; strategic offers received.',
  created_at: '2025-06-18T09:00:00Z',
},
{
  title: 'Food Packaging Automation Roll-Up',
  deal_type: 'Buy-Side M&A',
  sector: 'Manufacturing',
  deal_size: '$120M Program',
  status: 'Active',
  description:
    'Consolidating robotics-based packaging solution providers.',
  created_at: '2025-06-17T09:00:00Z',
},
{
  title: 'EV Charging Payment JV',
  deal_type: 'Joint Venture',
  sector: 'Energy',
  deal_size: '$60M JV',
  status: 'Pending',
  description:
    'Payments rails integrated into multi-operator charging networks.',
  created_at: '2025-06-16T09:00:00Z',
},
{
  title: 'Climate Sensor Network',
  deal_type: 'Capital Raising',
  sector: 'Climate Tech',
  deal_size: '$20M – $25M',
  status: 'Active',
  description:
    'High-density environmental sensors for city infrastructure analytics.',
  created_at: '2025-06-15T09:00:00Z',
},
{
  title: 'ICU Device Connectivity Exit',
  deal_type: 'Sell-Side M&A',
  sector: 'Healthcare',
  deal_size: '$70M – $90M',
  status: 'Pending',
  description:
    'Bedside data platform reducing alarms by 45%; OEM strategic interest.',
  created_at: '2025-06-14T09:00:00Z',
},
{
  title: 'Asset Tokenization Platform',
  deal_type: 'Capital Raising',
  sector: 'Financial Services',
  deal_size: '$28M – $35M',
  status: 'Active',
  description:
    'Digitizing alternative fund subscriptions with regulatory approvals.',
  created_at: '2025-06-13T09:00:00Z',
},
{
  title: 'Space Communications Acquisition',
  deal_type: 'Buy-Side M&A',
  sector: 'Defence Tech',
  deal_size: '$130M Program',
  status: 'Active',
  description:
    'Secure satcom providers consolidating LEO service coverage.',
  created_at: '2025-06-12T09:00:00Z',
},
{
  title: 'Synthetic Fuels Project',
  deal_type: 'Project Finance',
  sector: 'Energy',
  deal_size: '$300M CapEx',
  status: 'Pending',
  description:
    'Electrofuel production with offtake interest from airlines.',
  created_at: '2025-06-11T09:00:00Z',
},
{
  title: 'Zero-Carbon Mining Solutions',
  deal_type: 'Strategic Partnerships',
  sector: 'Climate Tech',
  deal_size: '$55M Initiative',
  status: 'Active',
  description:
    'Battery-electric fleet conversions in partnership with mining groups.',
  created_at: '2025-06-10T09:00:00Z',
},
{
  title: 'AI Commerce Platform Exit',
  deal_type: 'Sell-Side M&A',
  sector: 'Technology',
  deal_size: '$95M (negotiating)',
  status: 'Active',
  description:
    'Personalization engine with omni-channel retailers in 15 markets.',
  created_at: '2025-06-09T09:00:00Z',
},
{
  title: 'Regional Grid Interconnect PPP',
  deal_type: 'Public-Private Partnership',
  sector: 'Infrastructure',
  deal_size: '$400M CapEx',
  status: 'Pending',
  description:
    'Grid upgrade enabling renewables integration across state borders.',
  created_at: '2025-06-08T09:00:00Z',
},
{
  title: 'Enterprise Robotics Integration',
  deal_type: 'Capital Raising',
  sector: 'Manufacturing',
  deal_size: '$32M – $45M',
  status: 'Active',
  description:
    'Full-stack robotics automation with major industrial reference sites.',
  created_at: '2025-06-07T09:00:00Z',
},
{
  title: 'AI Shipyard Automation Exit',
  deal_type: 'Sell-Side M&A',
  sector: 'Defence Tech',
  deal_size: '$140M – $160M',
  status: 'Pending',
  description:
    'Robotic welding and inspection tech for naval shipbuilding yards.',
  created_at: '2025-06-06T09:00:00Z',
},
{
  title: 'Smart Packaging Sustainability JV',
  deal_type: 'Joint Venture',
  sector: 'Consumer',
  deal_size: '$50M JV',
  status: 'Active',
  description:
    'Reusable packaging systems partnering with major FMCG suppliers.',
  created_at: '2025-06-05T09:00:00Z',
},
{
  title: 'AI Marketing Platform Exit',
  deal_type: 'Sell-Side M&A',
  sector: 'Technology',
  deal_size: '$45M (closed)',
  status: 'Closed',
  description: 'Acquisition by global MarTech company completed successfully in Q2.',
  created_at: '2025-02-01T09:00:00Z',
},
{
  title: 'Regional Hospital PPP',
  deal_type: 'Public-Private Partnership',
  sector: 'Infrastructure',
  deal_size: '$300M CapEx',
  status: 'Pending',
  description: 'Consortium bid for regional healthcare infrastructure upgrade project.',
  created_at: '2025-02-15T09:00:00Z',
},
];

const statusChip = (status: string) => {
  switch (status?.toLowerCase()) {
    case 'active':
      return 'bg-neon-green/20 text-neon-green border-neon-green';
    case 'pending':
      return 'bg-cyber-yellow/20 text-cyber-yellow border-cyber-yellow';
    case 'closed':
      return 'bg-slate-gray/20 text-slate-gray border-slate-gray';
    default:
      return 'bg-electric-blue/20 text-electric-blue border-electric-blue';
  }
};

function MandateCard({ mandate }: { mandate: Mandate; index: number }) {
  return (
    <Card
      hover
      className="flex flex-col rounded-xl overflow-hidden bg-white border border-gray-100 hover:border-electric-blue shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full"
    >
      {/* Gradient strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-electric-blue via-vivid-purple to-hot-pink" />

      {/* Header row */}
      <div className="p-5 sm:p-6 flex items-start justify-between">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-electric-blue/15 to-vivid-purple/15 flex items-center justify-center">
          <TrendingUp className="w-6 h-6 text-electric-blue" />
        </div>
        <span
          className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${statusChip(
            mandate.status || ''
          )}`}
        >
          {mandate.status || 'Active'}
        </span>
      </div>

      {/* Title */}
      <h3 className="px-5 sm:px-6 text-lg sm:text-xl font-bold text-navy leading-snug mb-3">
        {mandate.title}
      </h3>

      {/* Deal info */}
      <div className="px-5 sm:px-6 space-y-2.5 mb-5">
        <div className="flex items-center justify-between text-sm text-slate-gray border-b border-gray-100 pb-2">
          <span>{mandate.deal_type}</span>
          <span className="font-semibold text-navy">{mandate.sector}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-slate-gray">
          <span>Deal Size</span>
          <span className="font-bold bg-gradient-to-r from-electric-blue to-vivid-purple bg-clip-text text-transparent">
            {mandate.deal_size}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="px-5 sm:px-6 text-slate-gray text-sm sm:text-base leading-relaxed flex-grow mb-5">
        {mandate.description}
      </p>

      {/* Button */}
      <div className="p-5 sm:p-6 pt-0">
        <Link to={`/contact?mandate=${encodeURIComponent(mandate.title)}`}>
          <Button
            variant="outline"
            size="sm"
            className="w-full border border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white transition-all"
          >
            Request More Info
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </Link>
      </div>
    </Card>
  );
}
export function PortfolioPage() {
  const [mandates, setMandates] = useState<Mandate[]>([]);
  const [filterSector, setFilterSector] = useState<string>('All');
  const [filterStatus, setFilterStatus] = useState<string>('Any');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sectorDropdownOpen, setSectorDropdownOpen] = useState(false);

  const [isFilterTransitioning, setIsFilterTransitioning] = useState(false);

useEffect(() => {
  if (!mobileFiltersOpen) {
    setIsFilterTransitioning(true);

    // ✅ Smooth scroll when filter changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    const timeout = setTimeout(() => setIsFilterTransitioning(false), 300);
    return () => clearTimeout(timeout);
  }
}, [filterSector, filterStatus, mobileFiltersOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (sectorDropdownOpen && !target.closest('[data-dropdown-container]')) {
        setSectorDropdownOpen(false);
      }
    };

    if (sectorDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [sectorDropdownOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (mobileFiltersOpen) {
          setMobileFiltersOpen(false);
        } else if (sectorDropdownOpen) {
          setSectorDropdownOpen(false);
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileFiltersOpen, sectorDropdownOpen]);

  useEffect(() => {
    if (mobileFiltersOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = '0';
      document.body.style.left = '0';
      document.body.style.right = '0';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
    };
  }, [mobileFiltersOpen]);

useEffect(() => {
  // 1️⃣ Instantly show local seed data
  const seedData = SEED_MANDATES.map((m, i) => ({
    id: `seed-${i}-${(m.title || 'deal').toLowerCase().replace(/\s+/g, '-')}`,
    ...m,
  })) as Mandate[];
  setMandates(seedData);

  // 2️⃣ Load Supabase data in background
  if (supabase) {
    (async () => {
      try {
        const { data, error } = await supabase
          .from('mandates')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        if (Array.isArray(data) && data.length > 0) {
          const seen = new Set(data.map((m: any) => (m.title || '').toLowerCase()));
          const merged = [
            ...data,
            ...seedData.filter((m) => !seen.has((m.title || '').toLowerCase())),
          ] as Mandate[];

          merged.sort(
            (a, b) =>
              new Date(b.created_at || 0).getTime() -
              new Date(a.created_at || 0).getTime()
          );

          setMandates(merged);
          console.log('Updated mandates from Supabase:', merged.length);
        }
      } catch (err) {
        console.warn('Supabase load failed, using local seed only:', err);
      }
    })();
  }
}, []);


  const sectors = useMemo(
    () => ['All', ...Array.from(new Set(mandates.map((m) => m.sector).filter(Boolean)))],
    [mandates]
  );
  const statuses = ['Any', 'Active', 'Pending', 'Closed'];

  const filtered = useMemo(() => {
    return mandates.filter((m) => {
      const sectorMatch = filterSector === 'All' || m.sector === filterSector;
      const statusMatch = filterStatus === 'Any' || (m.status || '').toLowerCase() === filterStatus.toLowerCase();
      return sectorMatch && statusMatch;
    });
  }, [mandates, filterSector, filterStatus]);

  const activeFilterCount = (filterSector !== 'All' ? 1 : 0) + (filterStatus !== 'Any' ? 1 : 0);

  return (
    <div className="min-h-screen pt-20">
 <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-vivid-purple via-hot-pink to-bright-orange animate-fade-in-up">
  <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="inline-block mb-6 animate-fade-in-up">
      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto border border-white/30 shadow-lg">
        <Briefcase className="w-8 h-8 text-white" />
      </div>
    </div>
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 animate-fade-in-up-delayed">
      Our Portfolio
    </h1>
    <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up-delayed leading-relaxed">
      Discover active deals and success stories from our brokerage services
    </p>
  </div>
</section>

      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-lg border-b-2 border-electric-blue/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="hidden md:flex flex-wrap items-center justify-center gap-3">
            <div className="relative" data-dropdown-container>
              <button
                onClick={() => setSectorDropdownOpen(!sectorDropdownOpen)}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-electric-blue to-vivid-purple text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
              >
                <span>Sector: {filterSector}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${sectorDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {sectorDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border-2 border-electric-blue/20 overflow-hidden z-50">
                  <div className="max-h-80 overflow-y-auto scrollbar-hide">
                    {sectors.map((sector) => (
                      <button
                        key={sector}
                        onClick={() => {
                          setFilterSector(sector);
                          setSectorDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 transition-colors ${
                          filterSector === sector
                            ? 'bg-electric-blue text-white font-semibold'
                            : 'hover:bg-electric-blue/10 text-navy'
                        }`}
                      >
                        {sector}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="h-6 w-px bg-slate-gray/20" />

            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => setFilterStatus(s)}
                className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  filterStatus === s
                    ? 'bg-navy text-white shadow-md'
                    : 'bg-gray-100 text-slate-gray hover:bg-gray-200'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-electric-blue to-vivid-purple text-white rounded-xl font-semibold shadow-lg active:scale-95 transition-all touch-manipulation min-h-[48px]"
              aria-label="Open filter menu"
              aria-expanded={mobileFiltersOpen}
            >
              <Filter className="w-5 h-5" />
              <span className="text-base">Filters</span>
              {activeFilterCount > 0 && (
                <span className="ml-1 px-2.5 py-1 bg-white text-electric-blue rounded-full text-xs font-bold">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      {mobileFiltersOpen && (
        <div
          className="md:hidden fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm animate-fadeIn filter-modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: '100dvh',
            width: '100vw',
            touchAction: 'none'
          }}
          onClick={() => setMobileFiltersOpen(false)}
          onTouchMove={(e) => e.preventDefault()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="filter-dialog-title"
        >
          <div
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl overflow-hidden animate-slideUp filter-modal-content"
            style={{
              maxHeight: '85dvh',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            <div className="flex-shrink-0 bg-white/95 backdrop-blur-md border-b-2 border-gray-100 px-6 py-5 flex items-center justify-between rounded-t-3xl shadow-sm">
              <h3 id="filter-dialog-title" className="text-xl font-bold text-navy">Filter Mandates</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
                aria-label="Close filter menu"
              >
                <X className="w-5 h-5 text-navy" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 pb-8 space-y-8" style={{ overscrollBehavior: 'contain' }}>
              <div>
                <h4 className="text-sm font-bold text-slate-gray uppercase tracking-wide mb-4">Sector</h4>
                <div className="flex flex-col gap-3">
                  {sectors.map((sector) => (
                    <button
                      key={sector}
                      onClick={() => setFilterSector(sector)}
                      className={`min-h-[48px] px-5 py-3.5 rounded-xl text-sm font-semibold transition-all active:scale-[0.98] touch-manipulation text-left ${
                        filterSector === sector
                          ? 'bg-gradient-to-r from-electric-blue to-vivid-purple text-white shadow-lg ring-2 ring-electric-blue/20 ring-offset-2'
                          : 'bg-gray-100 text-slate-gray active:bg-gray-200'
                      }`}
                      aria-pressed={filterSector === sector}
                    >
                      {sector}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-gray uppercase tracking-wide mb-4">Status</h4>
                <div className="grid grid-cols-2 gap-3">
                  {statuses.map((s) => (
                    <button
                      key={s}
                      onClick={() => setFilterStatus(s)}
                      className={`min-h-[48px] px-5 py-3.5 rounded-xl text-sm font-semibold transition-all active:scale-[0.98] touch-manipulation ${
                        filterStatus === s
                          ? 'bg-navy text-white shadow-lg ring-2 ring-navy/20 ring-offset-2'
                          : 'bg-gray-100 text-slate-gray active:bg-gray-200'
                      }`}
                      aria-pressed={filterStatus === s}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t-2 border-gray-100 space-y-3">
                <Button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full bg-gradient-to-r from-electric-blue to-vivid-purple text-white border-0 shadow-xl min-h-[52px] text-base touch-manipulation"
                  size="lg"
                >
                  Show {filtered.length} Results
                </Button>

                {activeFilterCount > 0 && (
                  <button
                    onClick={() => {
                      setFilterSector('All');
                      setFilterStatus('Any');
                    }}
                    className="w-full min-h-[48px] px-5 py-3 rounded-xl text-sm font-semibold text-slate-gray bg-gray-100 active:bg-gray-200 transition-all touch-manipulation"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="py-12 sm:py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center sm:text-left">
            <p className="text-lg text-slate-gray">
              Showing <span className="font-bold text-navy">{filtered.length}</span> of {mandates.length} mandates
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-opacity duration-300 ${
            isFilterTransitioning ? 'opacity-50' : 'opacity-100'
          }`}>
            {filtered.map((m, index) => (
              <MandateCard key={(m as any).id || `${m.title}-${index}`} mandate={m} index={index} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Briefcase className="w-16 h-16 text-slate-gray/30 mx-auto mb-4" />
              <p className="text-2xl font-bold text-navy mb-2">No mandates found</p>
              <p className="text-slate-gray">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-r from-electric-blue via-vivid-purple to-hot-pink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Have a Deal in Mind?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            We're always looking for new opportunities. Let's discuss your requirements.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-vivid-purple hover:bg-off-white shadow-2xl hover:shadow-white/50 border-0 text-base sm:text-lg px-8 py-6">
              Submit Your Deal
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

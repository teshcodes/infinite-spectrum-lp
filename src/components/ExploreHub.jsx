import React, { useState } from "react";
import { Link } from "react-router-dom";

const tabs = [
	{
		name: "Creators",
		icon: "🎨",
		profiles: [
			{
				id: "ava",
				name: "Ava",
				title: "Visual Artist",
				desc: "Transforms emotions into vibrant canvases that inspire others.",
				img: "https://randomuser.me/api/portraits/women/1.jpg"
			},
			{
				id: "leo",
				name: "Leo",
				title: "Musician",
				desc: "Composes melodies that evoke deep reflection and joy.",
				img: "https://randomuser.me/api/portraits/men/2.jpg"
			},
			{
				id: "mina",
				name: "Mina",
				title: "Writer",
				desc: "Crafts stories that connect generations and cultures.",
				img: "https://randomuser.me/api/portraits/women/3.jpg"
			},
			{
				id: "sophie",
				name: "Sophie",
				title: "Designer",
				desc: "Shapes intuitive experiences through thoughtful design.",
				img: "https://randomuser.me/api/portraits/women/4.jpg"
			},
			{
				id: "kai",
				name: "Kai",
				title: "Photographer",
				desc: "Captures the beauty in everyday moments.",
				img: "https://randomuser.me/api/portraits/men/5.jpg"
			},
			{
				id: "jules",
				name: "Jules",
				title: "Dancer",
				desc: "Expresses emotion and narrative through movement.",
				img: "https://randomuser.me/api/portraits/women/6.jpg"
			},
			{
				id: "rina",
				name: "Rina",
				title: "Illustrator",
				desc: "Brings ideas to life with playful and meaningful visuals.",
				img: "https://randomuser.me/api/portraits/women/7.jpg"
			},
			{
				id: "omar",
				name: "Omar",
				title: "Filmmaker",
				desc: "Tells powerful stories through the lens.",
				img: "https://randomuser.me/api/portraits/men/8.jpg"
			},
			{
				id: "tess",
				name: "Tess",
				title: "Poet",
				desc: "Finds magic in words and rhythm.",
				img: "https://randomuser.me/api/portraits/women/9.jpg"
			},
			{
				id: "nico",
				name: "Nico",
				title: "Crafts Maker",
				desc: "Creates tangible art that brings joy to others.",
				img: "https://randomuser.me/api/portraits/men/10.jpg"
			}
		]
	},
	{
		name: "Innovators",
		icon: "💡",
		profiles: [
			{
				id: "maya",
				name: "Maya",
				title: "Developer",
				desc: "Builds tools that solve real-world problems.",
				img: "https://randomuser.me/api/portraits/women/11.jpg"
			},
			{
				id: "eli",
				name: "Eli",
				title: "Strategist",
				desc: "Sees the big picture and charts new paths forward.",
				img: "https://randomuser.me/api/portraits/men/12.jpg"
			},
			{
				id: "priya",
				name: "Priya",
				title: "Engineer",
				desc: "Turns ideas into practical solutions.",
				img: "https://randomuser.me/api/portraits/women/13.jpg"
			},
			{
				id: "sam",
				name: "Sam",
				title: "Product Manager",
				desc: "Bridges vision and execution for impactful products.",
				img: "https://randomuser.me/api/portraits/men/14.jpg"
			},
			{
				id: "liam",
				name: "Liam",
				title: "Data Scientist",
				desc: "Finds insights in complexity and numbers.",
				img: "https://randomuser.me/api/portraits/men/15.jpg"
			},
			{
				id: "zara",
				name: "Zara",
				title: "UX Researcher",
				desc: "Uncovers user needs to guide innovation.",
				img: "https://randomuser.me/api/portraits/women/16.jpg"
			},
			{
				id: "ben",
				name: "Ben",
				title: "AI Specialist",
				desc: "Pushes the boundaries of intelligent technology.",
				img: "https://randomuser.me/api/portraits/men/17.jpg"
			},
			{
				id: "ivy",
				name: "Ivy",
				title: "App Creator",
				desc: "Designs apps that make life easier.",
				img: "https://randomuser.me/api/portraits/women/18.jpg"
			},
			{
				id: "noah",
				name: "Noah",
				title: "Systems Architect",
				desc: "Builds robust frameworks for growth.",
				img: "https://randomuser.me/api/portraits/men/19.jpg"
			},
			{
				id: "sage",
				name: "Sage",
				title: "Futurist",
				desc: "Imagines and prepares for tomorrow’s challenges.",
				img: "https://randomuser.me/api/portraits/men/20.jpg"
			}
		]
	},
	{
		name: "Connectors",
		icon: "🤝",
		profiles: [
			{
				id: "rae",
				name: "Rae",
				title: "Mentor",
				desc: "Guides others to reach their full potential.",
				img: "https://randomuser.me/api/portraits/women/21.jpg"
			},
			{
				id: "samira",
				name: "Samira",
				title: "Community Builder",
				desc: "Creates spaces where everyone feels welcome.",
				img: "https://randomuser.me/api/portraits/women/22.jpg"
			},
			{
				id: "alex",
				name: "Alex",
				title: "Networker",
				desc: "Brings people together for shared success.",
				img: "https://randomuser.me/api/portraits/men/23.jpg"
			},
			{
				id: "milo",
				name: "Milo",
				title: "Event Organizer",
				desc: "Designs experiences that foster connection.",
				img: "https://randomuser.me/api/portraits/men/24.jpg"
			},
			{
				id: "tara",
				name: "Tara",
				title: "Mediator",
				desc: "Resolves conflicts and builds understanding.",
				img: "https://randomuser.me/api/portraits/women/25.jpg"
			},
			{
				id: "jon",
				name: "Jon",
				title: "Volunteer Coordinator",
				desc: "Mobilizes teams for positive impact.",
				img: "https://randomuser.me/api/portraits/men/26.jpg"
			},
			{
				id: "lila",
				name: "Lila",
				title: "Storyteller",
				desc: "Shares narratives that unite communities.",
				img: "https://randomuser.me/api/portraits/women/27.jpg"
			},
			{
				id: "owen",
				name: "Owen",
				title: "Support Specialist",
				desc: "Ensures everyone feels heard and valued.",
				img: "https://randomuser.me/api/portraits/men/28.jpg"
			},
			{
				id: "nina",
				name: "Nina",
				title: "Peer Coach",
				desc: "Empowers others through encouragement.",
				img: "https://randomuser.me/api/portraits/women/29.jpg"
			},
			{
				id: "vic",
				name: "Vic",
				title: "Diversity Advocate",
				desc: "Champions inclusion and equity.",
				img: "https://randomuser.me/api/portraits/men/30.jpg"
			}
		]
	},
	{
		name: "Seekers",
		icon: "🔎",
		profiles: [
			{
				id: "noah",
				name: "Noah",
				title: "Researcher",
				desc: "Digs deep to uncover new knowledge.",
				img: "https://randomuser.me/api/portraits/men/31.jpg"
			},
			{
				id: "zoe",
				name: "Zoe",
				title: "Curious Mind",
				desc: "Never stops asking questions.",
				img: "https://randomuser.me/api/portraits/women/32.jpg"
			},
			{
				id: "mira",
				name: "Mira",
				title: "Student",
				desc: "Learns with passion and purpose.",
				img: "https://randomuser.me/api/portraits/women/33.jpg"
			},
			{
				id: "finn",
				name: "Finn",
				title: "Explorer",
				desc: "Seeks out new experiences and ideas.",
				img: "https://randomuser.me/api/portraits/men/34.jpg"
			},
			{
				id: "sami",
				name: "Sami",
				title: "Lifelong Learner",
				desc: "Believes growth never ends.",
				img: "https://randomuser.me/api/portraits/men/35.jpg"
			},
			{
				id: "jin",
				name: "Jin",
				title: "Philosopher",
				desc: "Contemplates life’s big questions.",
				img: "https://randomuser.me/api/portraits/men/36.jpg"
			},
			{
				id: "ruth",
				name: "Ruth",
				title: "Bookworm",
				desc: "Finds adventure in every page.",
				img: "https://randomuser.me/api/portraits/women/37.jpg"
			},
			{
				id: "theo",
				name: "Theo",
				title: "Experimenter",
				desc: "Loves to try and test new things.",
				img: "https://randomuser.me/api/portraits/men/38.jpg"
			},
			{
				id: "iris",
				name: "Iris",
				title: "Language Enthusiast",
				desc: "Connects with the world through words.",
				img: "https://randomuser.me/api/portraits/women/39.jpg"
			},
			{
				id: "drew",
				name: "Drew",
				title: "Question Asker",
				desc: "Drives conversations deeper.",
				img: "https://randomuser.me/api/portraits/men/40.jpg"
			}
		]
	},
	{
		name: "Healers",
		icon: "🩺",
		profiles: [
			{
				id: "grace",
				name: "Grace",
				title: "Nurse",
				desc: "Cares for others with skill and compassion.",
				img: "https://randomuser.me/api/portraits/women/41.jpg"
			},
			{
				id: "omar",
				name: "Omar",
				title: "Therapist",
				desc: "Helps people heal and grow emotionally.",
				img: "https://randomuser.me/api/portraits/men/42.jpg"
			},
			{
				id: "lena",
				name: "Lena",
				title: "Counselor",
				desc: "Guides others through life’s challenges.",
				img: "https://randomuser.me/api/portraits/women/43.jpg"
			},
			{
				id: "raj",
				name: "Raj",
				title: "Doctor",
				desc: "Combines science and empathy to heal.",
				img: "https://randomuser.me/api/portraits/men/44.jpg"
			},
			{
				id: "maya",
				name: "Maya",
				title: "Wellness Coach",
				desc: "Empowers others to live healthier lives.",
				img: "https://randomuser.me/api/portraits/women/45.jpg"
			},
			{
				id: "eli",
				name: "Eli",
				title: "Physical Therapist",
				desc: "Restores movement and confidence.",
				img: "https://randomuser.me/api/portraits/men/46.jpg"
			},
			{
				id: "sofia",
				name: "Sofia",
				title: "Holistic Practitioner",
				desc: "Sees the whole person, not just symptoms.",
				img: "https://randomuser.me/api/portraits/women/47.jpg"
			},
			{
				id: "toby",
				name: "Toby",
				title: "First Responder",
				desc: "Acts quickly to save and protect.",
				img: "https://randomuser.me/api/portraits/men/48.jpg"
			},
			{
				id: "nina",
				name: "Nina",
				title: "Support Group Leader",
				desc: "Builds safe spaces for healing.",
				img: "https://randomuser.me/api/portraits/women/49.jpg"
			},
			{
				id: "zane",
				name: "Zane",
				title: "Art Therapist",
				desc: "Uses creativity to foster healing.",
				img: "https://randomuser.me/api/portraits/men/50.jpg"
			}
		]
	},
	{
		name: "Leaders",
		icon: "🦁",
		profiles: [
			{
				id: "aiden",
				name: "Aiden",
				title: "Team Lead",
				desc: "Inspires teams to achieve their best.",
				img: "https://randomuser.me/api/portraits/men/51.jpg"
			},
			{
				id: "maya",
				name: "Maya",
				title: "Visionary",
				desc: "Sees what’s possible and motivates others.",
				img: "https://randomuser.me/api/portraits/women/52.jpg"
			},
			{
				id: "chris",
				name: "Chris",
				title: "Project Manager",
				desc: "Turns ideas into action and results.",
				img: "https://randomuser.me/api/portraits/men/53.jpg"
			},
			{
				id: "sasha",
				name: "Sasha",
				title: "Coach",
				desc: "Unlocks potential in individuals and groups.",
				img: "https://randomuser.me/api/portraits/women/54.jpg"
			},
			{
				id: "jordan",
				name: "Jordan",
				title: "Entrepreneur",
				desc: "Builds new ventures from the ground up.",
				img: "https://randomuser.me/api/portraits/men/55.jpg"
			},
			{
				id: "riley",
				name: "Riley",
				title: "Nonprofit Director",
				desc: "Leads with purpose and heart.",
				img: "https://randomuser.me/api/portraits/women/56.jpg"
			},
			{
				id: "morgan",
				name: "Morgan",
				title: "Public Speaker",
				desc: "Inspires audiences with powerful messages.",
				img: "https://randomuser.me/api/portraits/men/57.jpg"
			},
			{
				id: "harper",
				name: "Harper",
				title: "Change Agent",
				desc: "Drives transformation in organizations.",
				img: "https://randomuser.me/api/portraits/women/58.jpg"
			},
			{
				id: "quinn",
				name: "Quinn",
				title: "Policy Advocate",
				desc: "Champions causes for the greater good.",
				img: "https://randomuser.me/api/portraits/men/59.jpg"
			},
			{
				id: "sky",
				name: "Sky",
				title: "Community Organizer",
				desc: "Mobilizes people for collective action.",
				img: "https://randomuser.me/api/portraits/women/60.jpg"
			}
		]
	}
];

export default function ExploreHub({ id }) {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<section className="explore-hub" id={id}>
			<h2>Navigate the Spectrum: Find Your Path.</h2>
			<div className="tabs-nav" role="tablist">
				{tabs.map((tab, idx) => (
					<button
						key={tab.name}
						className={`tab-button${activeTab === idx ? " active" : ""}`}
						role="tab"
						aria-selected={activeTab === idx}
						aria-controls={`tab-panel-${idx}`}
						id={`tab-${idx}`}
						onClick={() => setActiveTab(idx)}
					>
						<span className="tab-icon">{tab.icon}</span> {tab.name}
					</button>
				))}
			</div>
			<div
				className="tab-content"
				role="tabpanel"
				id={`tab-panel-${activeTab}`}
				aria-labelledby={`tab-${activeTab}`}
			>
				<div className="profile-grid">
					{tabs[activeTab].profiles.map((profile) => (
						<Link
							to={`/profile/${profile.id}`}
							className="talent-profile-card"
							key={profile.id}
							style={{ textDecoration: "none", color: "inherit" }}
						>
							<img
								src={profile.img}
								alt={profile.name}
								className="profile-img"
								loading="lazy"
								style={{ objectFit: "cover" }}
							/>
							<div>
								<strong>{profile.name}</strong>
								<div className="profile-title">{profile.title}</div>
								<div className="profile-desc" style={{ fontSize: "0.95rem", color: "#555", marginTop: 4 }}>
									{profile.desc}
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}

export { tabs };
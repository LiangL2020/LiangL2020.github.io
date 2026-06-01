const projects = {
    ml: [
        {
            id: "ml-agentic-planning",
            title: "Hierarchical Agentic Planning",
            overview: "This project explores how large language models and reinforcement learning can work together to solve complex robotic tasks. The goal was to create a hierarchical system where a high-level planner interprets task objectives and a low-level reinforcement learning policy executes the required actions within a robotic simulation environment.",
            challenge: "Traditional reinforcement learning policies often struggle with long-horizon tasks because they must learn both high-level decision making and low-level control simultaneously. By separating planning from execution, the system can potentially solve more complex tasks while improving generalization.",
            built: "I developed the reinforcement learning component of the system using PPO (Proximal Policy Optimization) in the MetaWorld benchmark suite running on MuJoCo. I designed custom task representations, implemented reward shaping strategies, and built the training pipeline used to evaluate policy performance across different manipulation tasks.</br></br> To support future language-guided control, I also designed an interface that maps natural language instructions into structured task parameters that can be consumed by low-level policies.",
            contributions: ["Trained PPO-based policies for robotic manipulation tasks in simulation.", "Designed custom environments and task-conditioned state representations.", "Experimented with multiple reward configurations to balance exploration and task completion.", "Analyzed training curves, success rates, and failure cases to diagnose policy behavior.", "Improved policy performance through reward shaping, achieving over 99% task success after approximately 300,000 training steps.", "Designed the architecture for future integration of language-based task planning."],
            technologies: "Python, PyTorch, PPO, Reinforcement Learning, MuJoCo, MetaWorld, NumPy"
        },
        {
            id: "ml-discrete-continuous-control",
            title: "RL for Discrete and Continuous Control",
            overview: "...",
            challenge: "...",
            built: "...",
            contributions: [],
            technologies: "..."
        },
        {
            id: "ml-wildlife-monitor",
            title: "Enhancing Generalization in Wildlife Monitoring",
            overview: "...",
            challenge: "...",
            built: "...",
            contributions: [],
            technologies: "..."
        },
        {
            id: "ml-uav",
            title: "Gesture-Controlled UAV System",
            overview: "...",
            challenge: "...",
            built: "...",
            contributions: [],
            technologies: "..."
        }
    ],

    robotics: [
        {
            id: "rb-escape-room",
            title: "Robot Escape Room II",
            overview: "...",
            challenge: "...",
            built: "...",
            contributions: [1, 2, 3],
            technologies: "..."
        },
        {
            id: "rb-mobile",
            title: "Mobile Robotics",
            overview: "...",
            challenge: "...",
            built: "...",
            contributions: [],
            technologies: "..."
        },
        {
            id: "rb-photo-lapar",
            title: "Photoacoustic Laparoscopic Research",
            overview: "...",
            challenge: "...",
            built: "...",
            contributions: [],
            technologies: "..."
        },
        {
            id: "rb-uav",
            title: "Gesture-Controlled UAV System",
            overview: "...",
            challenge: "...",
            built: "...",
            contributions: [],
            technologies: "..."
        }
    ],

    sde: [
        {
            id: "sde-escape-room",
            title: "Robot Escape Room II",
            overview: "...",
            challenge: "...",
            built: "...",
            contributions: [],
            technologies: "..."
        },
        {
            id: "sde-aws",
            title: "AWS Project Management System",
            overview: "...",
            challenge: "...",
            built: "...",
            contributions: [],
            technologies: "..."
        },
        {
            id: "sde-android",
            title: "Android Application System",
            overview: "...",
            challenge: "...",
            built: "...",
            contributions: [],
            technologies: "..."
        }
    ]
};


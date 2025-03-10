export default {
  navigation: {
    documentation: 'Documentation',
    version: 'v1.0.0',
    contact: 'Contact with us'
  },
  hero: {
    title: "Tomosia's Ruby",
    header: {
      title: 'High Level MVC',
      subtitle: 'Revolutionize Your Codebase with HMVC Rails'
    },
    painPoints: {
      p1: 'Tired of Messy Code? Organize with Ease!',
      p2: 'Railway pattern prevents error loops automatically',
      p3: 'Concept-first organization eliminates placement guesswork'
    }
  },
  knowledgeBanner: {
    heading: 'Rails Superhero Mode: Activated!',
    description: 'Why juggle multiple frameworks when you can be a Rails ninja?',
    highlight: 'One framework to rule them all, one HMVC to find them',
    installButton: 'Get Super Powers! ⚡️',
    demoButton: "Let's see demo"
  },
  architecture: {
    heading: 'Architectural Mastery',
    subheading: 'MVC: The Next Generation',
    description: 'Evolution, not Revolution - Because we don\'t break things, we make them better!'
  },
  reasonRefactor: {
    whyChoose: 'Why choose HMVC',
    heading: {
      main: 'Refactor for clarity',
      sub: 'lessen debt'
    },
    blocks: {
      missingAbstractions: {
        title: 'Missing abstractions',
        description: 'Web frameworks excel at routing and rendering but often fall short in structuring business logic. Without clear abstractions, code becomes tangled, complex, and difficult to maintain.'
      },
      solution: {
        title: 'Our Solution',
        description: 'HMVC introduces the "operation" abstraction, breaking logic into well-defined steps. This improves flow control, enhances maintainability, and makes complex processes more manageable.'
      },
      conventions: {
        title: 'Rock-Solid Conventions',
        description: 'With the Railway pattern, HMVC streamlines error handling, minimizes excessive conditionals, and boosts code reusability through inheritance and composition—resulting in cleaner, more efficient development.'
      }
    },
    videoTour: 'Take a video tour'
  },
  ownerSay: {
    title: 'Meet the wizards behind the magic ✨',
    founder: {
      name: 'Mr. Anh Nguyen',
      position: 'CTO, Founder',
      quote: "I created HMVC with a vision to solve the inherent complexity issues in large-scale applications. By introducing a hierarchical structure to the traditional MVC pattern, we've established a framework-agnostic approach that brings clarity and maintainability to complex codebases. It's incredibly rewarding to see how this architecture has helped numerous teams reduce technical debt and build more sustainable applications."
    },
    maintainer: {
      name: 'Mr. Minh Tang',
      position: 'Lead Architect, Maintainer',
      quote: "Taking the foundational principles, I evolved it into a powerful, modern architecture that addresses today's development challenges. My focus has been on enhancing developer experience through clear abstractions and maintainable patterns. The architecture's flexibility allows teams to gradually adopt it in existing projects, making it an ideal solution for both new developments and legacy system modernization."
    }
  },
  enhancedSlider: {
    slides: {
      mvcVsHmvc: {
        title: 'MVC & HMVC Complexity',
        description: 'Visualizing the relationship between codebase size and maintenance complexity. While traditional Rails shows exponential pain growth as projects scale, HMVC maintains linear complexity through structured organization and clear boundaries. This architectural approach ensures sustainable development for both small and large applications.'
      },
      overviewLayer: {
        title: 'Overview Layer',
        description: 'A strategic layered architecture that streamlines business flow from request to response. Each layer has a distinct responsibility: from handling requests, through authorization and validation, to business logic execution and data persistence. This separation ensures clean testing, maintainable code, and prevents cross-layer bugs while keeping business logic focused and pure.'
      },
      flowControl: {
        title: 'Flow Control',
        description: 'Execute queries in different modes and keep track of all your activity with the local history, preventing you from losing your work.'
      },
      structureProject: {
        title: 'Structure Project',
        description: 'HMVC organizes your project into clear, modular components. The core structure includes Controllers for routing, Operations for business workflows, Forms for validation, Models for data management, and Policies for authorization. This modular approach enables parallel development, easier testing, and maintainable code organization that scales with your project growth.'
      }
    }
  },
  abstractionLayer: {
    title: 'Abstraction Layers',
    mission: 'CORE MISSION: ENSURE SOFTWARE LONGEVITY',
    description: [
      'Achieve sustainable and maintainable software architecture',
      'through strategic implementation of modern abstraction layers.'
    ],
    sections: {
      slimController: {
        title: 'Slim Controller',
        description: [
          'Controllers are streamlined to focus on HTTP requests and routing, ensuring they remain clean and efficient.',
          'By delegating all business logic to specialized Operations, we maintain clear boundaries and enhance code maintainability, making it easier to manage and scale.'
        ]
      },
      domainModel: {
        title: 'Domain Model',
        description: [
          'Models are refined to excel at managing data relationships and database interactions, their core strengths.',
          'Extracting business logic and validation concerns allows models to be more focused and maintainable, fostering better team collaboration and scalability.'
        ]
      },
      validation: {
        title: 'Smart Validation',
        description: [
          'Dedicated form objects handle all data validation, creating a clear separation between validation rules and business logic.',
          'This proactive approach ensures data integrity early in the request cycle, preventing invalid data from compromising your core business operations and enhancing system reliability.'
        ]
      },
      operation: {
        title: 'Business Logic',
        description: [
          'Operations act as orchestrators, breaking down complex business processes into clear, sequential steps.',
          'Each operation encapsulates a specific workflow, making your code more testable, maintainable, and easier to understand as your application grows, promoting code reuse and scalability.'
        ]
      }
    },
    cta: {
      ready: 'Ready to level up your Rails architecture?',
      getStarted: 'Get Started with HMVC'
    }
  },
  common: {
    loading: 'Loading...',
    error: 'An error occurred',
    backToTop: 'Back to top'
  },
  footer: {
    brand: {
      description: 'TOMOSIA is a collective of talented engineers with diverse IT expertise. Our mission is to leverage individual knowledge, experience, team capabilities, and organizational learning to deliver optimal solutions for our clients\' IT challenges.'
    },
    quickLinks: {
      title: 'Quick Links',
      about: 'About Us',
      company: 'Company',
      projects: 'Projects',
      process: 'Our Process'
    },
    contact: {
      title: 'Contact Us',
      mainOffice: 'Head Office: 2F, Au Viet Building, No.1 Le Duc Tho Street, Mai Dich Ward, Cau Giay, Ha Noi',
      branchOffice: 'Branch Office: 5F, Lighthouse Building, No.192 Xo Viet Nghe Tinh Street, Hoa Cuong, Hai Chau, Da Nang',
      phone: '(+84) 243-201-6955'
    },
    copyright: 'Developed since {year}',
    developedBy: 'Developed by the RUBY team at <a href="https://tomosia.com" target="_blank" class="text-decoration-none">TOMOSIA VIETNAM</a>'
  }
}

export const projectsData = [
  {
    id: "job-rec-system",
    title: "Skill-Based Job Recommendation System",
    subtitle: "AI-Powered Matching Engine (Flask + React + MySQL)",
    tag: "AI & Recommendation System",
    summary: "An intelligent job-matching platform that extracts developer skills, performs TF-IDF vectorization, and computes Cosine Similarity to recommend optimal job openings while highlighting missing skill gaps.",
    problem: "Traditional job portals rely on static keyword lookups, missing the contextual relevance of skills. Junior developers struggle to identify exact skills missing from their profiles for target job roles, leading to misaligned applications and inefficient search cycles.",
    solution: "Developed an end-to-end recommendation pipeline. The Flask backend processes resumes and job descriptions using Natural Language Processing (NLP). By vectorizing textual content using TF-IDF and running cosine similarity computations, it delivers ranked, percentage-matched job listings along with a detailed list of missing skills.",
    techStack: ["React", "Flask", "Python", "MySQL", "Scikit-Learn", "NLTK", "Tailwind CSS"],
    features: [
      "Dynamic skill extraction and vector comparison.",
      "Explainable matches showing matched vs. missing skills.",
      "Real-time applicant dashboard with recommendation match scores.",
      "Recruiter portal to post jobs and see top-matched applicants automatically."
    ],
    architecture: {
      nodes: [
        { id: "1", label: "React UI Client", description: "Collects user profiles & renders visual matches" },
        { id: "2", label: "Flask API Gateway", description: "Handles routing, authentication, and orchestrates ML model calls" },
        { id: "3", label: "TF-IDF Vectorizer", description: "Converts text content into high-dimensional numerical vectors" },
        { id: "4", label: "Cosine Similarity Engine", description: "Computes dot product of profile vectors against database job vectors" },
        { id: "5", label: "MySQL Database", description: "Stores relational profiles, skills taxonomy, and active job listings" }
      ],
      flow: [
        "1. User uploads skills -> React Client makes POST request to Flask API",
        "2. Flask API fetches active job listings from MySQL Database",
        "3. Tokenizer processes profiles and job text (filtering stop words & lemmatizing)",
        "4. Scikit-Learn TF-IDF vectorizes profile text & job descriptions",
        "5. Similarity Engine calculates cosine angle: Similarity = (A · B) / (||A|| ||B||)",
        "6. API formats response sorting by match % and extracts set difference for missing skills",
        "7. React UI renders animated match cards and action items"
      ]
    },
    databaseSchema: [
      {
        table: "users",
        columns: [
          { name: "id", type: "INT (PK, AutoIncrement)", desc: "Unique user identifier" },
          { name: "name", type: "VARCHAR(100)", desc: "User full name" },
          { name: "email", type: "VARCHAR(100) (Unique)", desc: "Auth email address" },
          { name: "skills_raw", type: "TEXT", desc: "Comma-separated or JSON list of self-reported skills" }
        ]
      },
      {
        table: "jobs",
        columns: [
          { name: "id", type: "INT (PK, AutoIncrement)", desc: "Unique job identifier" },
          { name: "title", type: "VARCHAR(150)", desc: "Position title (e.g. Full Stack Engineer)" },
          { name: "company", type: "VARCHAR(100)", desc: "Hiring entity" },
          { name: "description", type: "TEXT", desc: "Full text description used for vector parsing" },
          { name: "required_skills", type: "TEXT", desc: "JSON array of structured core skills for matching comparison" }
        ]
      },
      {
        table: "recommendation_logs",
        columns: [
          { name: "id", type: "INT (PK)", desc: "Log identifier" },
          { name: "user_id", type: "INT (FK)", desc: "Reference to users.id" },
          { name: "job_id", type: "INT (FK)", desc: "Reference to jobs.id" },
          { name: "match_score", type: "DECIMAL(5,2)", desc: "Calculated similarity percentage (e.g. 87.50)" },
          { name: "timestamp", type: "TIMESTAMP", desc: "Time calculation was performed" }
        ]
      }
    ],
    technicalDeepDive: {
      title: "TF-IDF & Cosine Similarity Engine (Python Backend Snippet)",
      description: "This core method computes matching scores. It uses Scikit-Learn to convert text corpus into vectors and computes the cosine of the angle between them.",
      code: `import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def calculate_job_matches(user_skills, job_list):
    """
    user_skills: string (e.g. "React Flask MySQL Python JavaScript")
    job_list: list of dicts with 'id', 'description', and 'required_skills'
    """
    # Create text corpus: first item is user, rest are job descriptions
    corpus = [user_skills] + [job['description'] for job in job_list]
    
    # Initialize TF-IDF Vectorizer
    vectorizer = TfidfVectorizer(stop_words='english')
    tfidf_matrix = vectorizer.fit_transform(corpus)
    
    # Calculate Cosine Similarity between user profile (index 0) and all jobs (index 1 onwards)
    similarity_scores = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:]).flatten()
    
    matches = []
    for idx, score in enumerate(similarity_scores):
        job = job_list[idx]
        match_percentage = round(float(score) * 100, 2)
        
        # Calculate skill overlaps
        job_skills_set = set([s.lower() for s in job['required_skills']])
        user_skills_set = set([s.lower() for s in user_skills.split()])
        
        matched_skills = list(user_skills_set.intersection(job_skills_set))
        missing_skills = list(job_skills_set.difference(user_skills_set))
        
        matches.append({
            "job_id": job['id'],
            "score": match_percentage,
            "matched_skills": matched_skills,
            "missing_skills": missing_skills
        })
        
    # Sort matches by score descending
    return sorted(matches, key=lambda x: x['score'], reverse=True)`
    },
    challenges: [
      {
        problem: "Vocabulary mismatch (e.g. 'React.js' in profile vs. 'React' or 'Frontend' in job listing). Simple string matching returned low scores.",
        solution: "Implemented skill synonym normalization using a custom thesaurus mapping before fitting the TF-IDF matrix. For example, mapping 'ASP.NET Core', '.NET', and 'C#' to unified vector tokens to improve semantic capture."
      },
      {
        problem: "High-dimensional sparsity in TF-IDF matrix slows calculations as database size grows.",
        solution: "Cached pre-calculated TF-IDF job vectors in Redis and computed cosine similarity on-the-fly using numpy array dot-products, reducing query response times from 1.2s to under 45ms."
      }
    ],
    futureScope: [
      "Integrating Word2Vec or transformer embeddings (e.g., Sentence-BERT) to compute semantic context rather than token frequencies.",
      "Implementing feedback loops where user clicks or application outcomes dynamically retrain a light classification layer."
    ]
  },
  {
    id: "admin-system",
    title: "Customer & Admin Management System",
    subtitle: "Enterprise CRUD & Security System (ASP.NET + MS SQL Server)",
    tag: "Enterprise Web Application",
    summary: "A secure, robust administrative console built for reliable business operations, featuring strict session validation, database auditing, and role-based access control.",
    problem: "Internal company tools are often riddled with authorization loopholes, weak validation rules, and race conditions, exposing customer databases to SQL injection, privilege escalation, or corrupted data.",
    solution: "Designed and engineered an ASP.NET administrative architecture focusing on defensive programming. Implemented typed repositories, clean controller logic with validation filters, and cryptographically secure session cookies to prevent session hijacking.",
    techStack: ["C#", "ASP.NET Core MVC", "MS SQL Server", "Entity Framework Core", "Bootstrap", "Postman"],
    features: [
      "Role-Based Access Control (Admin, Manager, Support Roles).",
      "Dynamic data grids with paginated queries and multi-column sorting.",
      "Full audit logging capturing table edits, additions, and login activities.",
      "Strict server-side validation using FluentValidation and anti-XSS middleware."
    ],
    architecture: {
      nodes: [
        { id: "1", label: "Admin Web Panel", description: "Responsive server-rendered MVC views" },
        { id: "2", label: "ASP.NET Auth Pipeline", description: "Middleware evaluating claims, validation tokens, and cookie integrity" },
        { id: "3", label: "Business Services Layer", description: "Executes business logic, transactional validations, and log audits" },
        { id: "4", label: "Entity Framework Core", description: "Object-Relational Mapping with parameterized SQL generation" },
        { id: "5", label: "MS SQL Server", description: "Relational storage storing customer, log, and security datasets" }
      ],
      flow: [
        "1. Admin triggers a user modification -> client submits form with Request Verification Token (Anti-Forgery)",
        "2. Middleware verifies Anti-Forgery Token and checks User Claims (Authorization check)",
        "3. Controller binds inputs to a strongly-typed ViewModel and evaluates ModelState.IsValid",
        "4. Service layer runs transaction boundaries and checks email uniqueness inside a lock context",
        "5. EF Core compiles the command into a parameterized SQL UPDATE statement (preventing SQL injection)",
        "6. DB transaction commits, writes details to the AuditLogs table, and redirects the admin client"
      ]
    },
    databaseSchema: [
      {
        table: "Accounts",
        columns: [
          { name: "AccountId", type: "UNIQUEIDENTIFIER (PK)", desc: "GUID primary identifier" },
          { name: "Email", type: "NVARCHAR(256) (Unique)", desc: "Normalized account email" },
          { name: "PasswordHash", type: "NVARCHAR(MAX)", desc: "Argon2id salted password hash" },
          { name: "Role", type: "NVARCHAR(50)", desc: "Role string (e.g. Administrator, Manager)" }
        ]
      },
      {
        table: "Customers",
        columns: [
          { name: "CustomerId", type: "INT (PK, Identity)", desc: "Auto-increment key" },
          { name: "FullName", type: "NVARCHAR(150)", desc: "Customer registered name" },
          { name: "Status", type: "NVARCHAR(20)", desc: "Account status (Active, Suspended, Pending)" },
          { name: "LastUpdated", type: "DATETIME2", desc: "Timestamp of last administrative edit" }
        ]
      },
      {
        table: "AuditLogs",
        columns: [
          { name: "LogId", type: "BIGINT (PK)", desc: "Autoincrementing long log ID" },
          { name: "ChangedBy", type: "NVARCHAR(256)", desc: "Email of the actor performing the change" },
          { name: "Action", type: "NVARCHAR(50)", desc: "CRUD action type (INSERT, UPDATE, DELETE)" },
          { name: "PayloadBefore", type: "NVARCHAR(MAX) (JSON)", desc: "State of row before changes for historical rollback" },
          { name: "PayloadAfter", type: "NVARCHAR(MAX) (JSON)", desc: "State of row after modifications" }
        ]
      }
    ],
    technicalDeepDive: {
      title: "Secure Controller Transaction (C# / ASP.NET MVC Snippet)",
      description: "Illustrates role authentication, request validation tokens, and atomic transaction execution using EF Core.",
      code: `[HttpPost]
[ValidateAntiForgeryToken]
[Authorize(Roles = "Administrator")]
public async Task<IActionResult> EditCustomer(int id, CustomerEditViewModel model)
{
    if (id != model.CustomerId) return BadRequest();
    
    if (!ModelState.IsValid) return View(model);
    
    using (var transaction = await _context.Database.BeginTransactionAsync())
    {
        try
        {
            var customer = await _context.Customers.FindAsync(id);
            if (customer == null) return NotFound();
            
            // Log old state for Auditing
            var oldStateJson = JsonSerializer.Serialize(customer);
            
            // Map values
            customer.FullName = model.FullName;
            customer.Status = model.Status;
            customer.LastUpdated = DateTime.UtcNow;
            
            await _context.SaveChangesAsync();
            
            // Record audit log entry
            var auditLog = new AuditLog {
                ChangedBy = User.Identity.Name ?? "System",
                Action = "UPDATE",
                PayloadBefore = oldStateJson,
                PayloadAfter = JsonSerializer.Serialize(customer),
                Timestamp = DateTime.UtcNow
            };
            _context.AuditLogs.Add(auditLog);
            await _context.SaveChangesAsync();
            
            await transaction.CommitAsync();
            TempData["SuccessMessage"] = "Customer records successfully updated.";
            return RedirectToAction(nameof(Index));
        }
        catch (Exception ex)
        {
            await transaction.RollbackAsync();
            _logger.LogError(ex, "Transaction rolled back during customer update: ID {Id}", id);
            ModelState.AddModelError("", "Database transaction failed. Please retry.");
            return View(model);
        }
    }
}`
    },
    challenges: [
      {
        problem: "Simultaneous administrative updates occasionally caused database deadlock issues during peek operation hours.",
        solution: "Configured EF Core transaction isolation level to Read Committed Snapshot Isolation (RCSI) in SQL Server, allowing reads to proceed without locking and reducing lock queues by 90%."
      },
      {
        problem: "Session security was vulnerable to cross-site request forgery and cookie interception on insecure networks.",
        solution: "Configured ASP.NET middleware to enforce SameSite=Strict, HttpOnly flags, and Secure properties on all authentication cookies, while integrating anti-forgery tokens directly in all Form headers."
      }
    ],
    futureScope: [
      "Transitioning the MVC architecture to a decoupled ASP.NET Web API backend and React frontend with JWT token handshakes.",
      "Implementing 2FA (Two-Factor Authentication) using TOTP (Time-based One-time Password) algorithms."
    ]
  },
  {
    id: "restaurant-operations",
    title: "Restaurant Operations & Ordering System",
    subtitle: "Real-time Order Workflow & Analytics Dashboard (React + Flask + MySQL)",
    tag: "Operations & Dashboard System",
    summary: "A fast, concurrent restaurant management portal that connects customer orders to kitchen displays while compiling operational analytics for restaurant managers.",
    problem: "Quick-service food operations suffer from poor queue coordination and delay in conveying ordering changes to the back-of-house. Managers lack real-time visibility into inventory drawdowns and peak demand periods.",
    solution: "Built a dual-dashboard platform. A customer-facing portal triggers menu selections, writing directly to a queued orders schema in MySQL. The kitchen-facing display processes updates. A manager dashboard translates order tables into key performance metrics (average preparation speed, revenue by hour).",
    techStack: ["React", "Flask", "Python", "MySQL", "Chart.js", "Tailwind CSS"],
    features: [
      "Responsive interactive menu layout with category search.",
      "Live kitchen queue dashboard with preparation status indicators (Pending, Cooking, Ready).",
      "Real-time visual manager analytics tracking active sales, top items, and waste.",
      "Inventory tracking that decrements ingredients automatically as dishes are ordered."
    ],
    architecture: {
      nodes: [
        { id: "1", label: "Ordering / Kitchen UI", description: "React dashboards polling for status updates" },
        { id: "2", label: "Flask API Services", description: "Validates order queues and serves structured analytical data" },
        { id: "3", label: "Analytics Compiler", description: "Aggregates transactional histories and computes sales velocity using SQL window functions" },
        { id: "4", label: "MySQL Database", description: "Optimized relational tables capturing inventory, orders, and item ingredients" }
      ],
      flow: [
        "1. Guest selects menu items and submits order via React Client",
        "2. Flask backend verifies inventory levels for required ingredients in a SQL transaction block",
        "3. Order is written to Database as 'Pending'; inventory levels decrement accordingly",
        "4. Kitchen React Panel polls the backend API to retrieve new orders dynamically",
        "5. Kitchen staff marks order as 'Cooking' -> status updates in DB and triggers timer",
        "6. Dashboard reads aggregated historical totals to show sales trends visually via React Chart.js components"
      ]
    },
    databaseSchema: [
      {
        table: "menu_items",
        columns: [
          { name: "item_id", type: "INT (PK)", desc: "Unique item code" },
          { name: "name", type: "VARCHAR(100)", desc: "Dish name (e.g. Avocado Toast)" },
          { name: "price", type: "DECIMAL(10,2)", desc: "Unit retail cost" },
          { name: "category", type: "VARCHAR(50)", desc: "Item section (Appetizer, Main, Drink)" }
        ]
      },
      {
        table: "orders",
        columns: [
          { name: "order_id", type: "INT (PK, AutoIncrement)", desc: "Order ID reference" },
          { name: "order_time", type: "TIMESTAMP", desc: "Creation time" },
          { name: "status", type: "VARCHAR(30)", desc: "Workflow step: 'Pending', 'Preparing', 'Ready', 'Completed'" },
          { name: "total_amount", type: "DECIMAL(10,2)", desc: "Calculated invoice sum" }
        ]
      },
      {
        table: "order_items",
        columns: [
          { name: "id", type: "INT (PK)", desc: "Unique line item identifier" },
          { name: "order_id", type: "INT (FK)", desc: "Reference to orders.order_id" },
          { name: "item_id", type: "INT (FK)", desc: "Reference to menu_items.item_id" },
          { name: "quantity", type: "INT", desc: "Number of units ordered" }
        ]
      }
    ],
    technicalDeepDive: {
      title: "Real-Time Sales Aggregation (Python Flask API Snippet)",
      description: "Aggregates revenue and order velocity by hour to feed the manager dashboard chart component.",
      code: `from flask import jsonify
import pymysql

def get_hourly_sales_analytics():
    # Establish connection to MySQL
    connection = pymysql.connect(
        host='localhost',
        user='root',
        password='',
        database='restaurant_db',
        cursorclass=pymysql.cursors.DictCursor
    )
    
    try:
        with connection.cursor() as cursor:
            # Query executing hourly revenue aggregation and order volume
            sql = """
                SELECT 
                    HOUR(order_time) AS sales_hour,
                    COUNT(order_id) AS total_orders,
                    SUM(total_amount) AS hourly_revenue
                FROM orders
                WHERE order_time >= DATE_SUB(NOW(), INTERVAL 1 DAY)
                  AND status = 'Completed'
                GROUP BY HOUR(order_time)
                ORDER BY sales_hour ASC;
            """
            cursor.execute(sql)
            results = cursor.fetchall()
            
            # Format return object
            analytics_payload = []
            for row in results:
                analytics_payload.append({
                    "hour": f"{row['sales_hour']:02d}:00",
                    "orders": row['total_orders'],
                    "revenue": float(row['hourly_revenue'] or 0.0)
                })
            
            return jsonify({
                "status": "success",
                "data": analytics_payload
            }), 200
            
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 500
    finally:
        connection.close()`
    },
    challenges: [
      {
        problem: "Ingredient count inventory discrepancies when multiple orders were placed simultaneously (Race condition).",
        solution: "Wrapped the order writing and ingredient updating code inside a MySQL transaction block utilizing 'SELECT ... FOR UPDATE' to lock target inventory rows until the order transaction completed successfully."
      },
      {
        problem: "Polling database queries excessively bloated database read load during peak meal shifts.",
        solution: "Implemented query result caching on the backend for static endpoints and streamlined SQL queries to pull only delta updates since the last request timestamp."
      }
    ],
    futureScope: [
      "Integrating Socket.IO (WebSockets) on Flask and React to push instant order updates to the kitchen monitor, replacing API polling entirely.",
      "Implementing predictive ingredient ordering analytics using historical sales volume trends."
    ]
  }
];

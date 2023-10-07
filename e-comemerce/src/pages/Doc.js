import React from "react";

const Doc = () => {
  return (
    <div>
      <div
    style={{
        margin: "10px",
        boxShadow: "2px 2px 5px rgb(175,148,131)",
        padding: "10px",
        borderRadius: "5px",
        transition: "box-shadow 0.3s, transform 0.3s", // Added 'transform' property for the hover effect
        textAlign: "center",
        cursor: "pointer", // Change the cursor to a pointer on hover
        transform: "scale(1)", // Initial scale
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.005)"; // Scale up on hover
        e.currentTarget.style.boxShadow = "5px 5px 10px rgb(175,148,131)"; // Add a larger shadow on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)"; // Reset the scale on hover out
        e.currentTarget.style.boxShadow = "2px 2px 5px rgb(175,148,131)"; // Reset the shadow on hover out
      }}
      >
        <h2
          style={{
            alignItems: "center",
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Introduction
        </h2>
        <div style={{ fontSize: "16px", lineHeight: "1.5", color: "#333" }}>
          <p>
            Welcome to the official documentation for Ansh store. This
            documentation serves as a comprehensive guide to understanding and
            utilizing the various services and functionalities offered by our
            e-commerce platform. Whether you are a user, administrator, or
            developer, this resource will help you navigate and make the most of
            our platform.
          </p>
        </div>
      </div>

      <div
    style={{
        margin: "10px",
        boxShadow: "2px 2px 5px rgb(175,148,131)",
        padding: "10px",
        borderRadius: "5px",
        transition: "box-shadow 0.3s, transform 0.3s", // Added 'transform' property for the hover effect
        textAlign: "center",
        cursor: "pointer", // Change the cursor to a pointer on hover
        transform: "scale(1)", // Initial scale
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.005)"; // Scale up on hover
        e.currentTarget.style.boxShadow = "5px 5px 10px rgb(175,148,131)"; // Add a larger shadow on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)"; // Reset the scale on hover out
        e.currentTarget.style.boxShadow = "2px 2px 5px rgb(175,148,131)"; // Reset the shadow on hover out
      }}
       
      >
        <h2
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}
        >
          Key Objectives
        </h2>
        <div style={{ fontSize: "16px", lineHeight: "1.5", color: "#333" }}>
          <p>
            Streamlined Shopping: We aim to simplify the online shopping process
            for customers while ensuring a secure and seamless transaction
            experience. <br></br>
            Efficient Management: For administrators, our platform offers
            efficient tools for managing products, orders, and user accounts.
            <br></br>
            Scalability: Our e-commerce solution is scalable, making it suitable
            for businesses of all sizes, from startups to enterprises.<br></br>
            Unique Selling Points: Customization: Tailor your e-commerce store
            to match your brand's identity and unique requirements. <br></br>
            Payment Options: We offer a wide range of payment gateways, allowing
            customers to choose their preferred payment method. <br></br>
            Mobile-Friendly: Our platform is responsive, ensuring a smooth
            shopping experience across devices. Analytics and Reporting: Gain
            valuable insights into your business's performance with our
            analytics and reporting tools. As you e
          </p>
        </div>
      </div>
      <div
   style={{
    margin: "10px",
    boxShadow: "2px 2px 5px rgb(175,148,131)",
    padding: "10px",
    borderRadius: "5px",
    transition: "box-shadow 0.3s, transform 0.3s", // Added 'transform' property for the hover effect
    textAlign: "center",
    cursor: "pointer", // Change the cursor to a pointer on hover
    transform: "scale(1)", // Initial scale
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.005)"; // Scale up on hover
    e.currentTarget.style.boxShadow = "5px 5px 10px rgb(175,148,131)"; // Add a larger shadow on hover
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)"; // Reset the scale on hover out
    e.currentTarget.style.boxShadow = "2px 2px 5px rgb(175,148,131)"; // Reset the shadow on hover out
  }}
      >
        <h2
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}
        >
          User Roles
        </h2>
        <div style={{ fontSize: "16px", lineHeight: "1.5", color: "#333" }}>
          <p>
            Ansh Store is designed to accommodate various user roles, each with
            specific responsibilities and access permissions. Understanding
            these roles is essential for effectively managing your e-commerce
            <br></br>
            operations:
            <br></br>
            Administrator: Administrators have full control over the platform.
            They can manage products, users, orders, and configurations. Admins
            play a crucial role in maintaining the website and overseeing its
            operations. <br></br>Customer: Customers are the end-users of the
            platform. They create accounts, browse products, add items to their
            carts, make purchases, and track their orders. Customer satisfaction
            is a priority. <br></br>Vendor: Vendors are independent sellers who
            use the platform to showcase and sell their products. They have
            access to vendor-specific dashboards to manage their inventory,
            pricing, and orders. <br></br>Customer Support: Customer support
            agents are responsible for assisting customers with inquiries,
            issues, and order-related concerns. They have access to customer
            support tools to provide timely assistance.<br></br> Developer :
            Developers may interact with the platform through APIs. They build
            and integrate custom solutions, extending the functionality of the
            e-commerce site.
          </p>
        </div>
      </div>
      <div
     style={{
        margin: "10px",
        boxShadow: "2px 2px 5px rgb(175,148,131)",
        padding: "10px",
        borderRadius: "5px",
        transition: "box-shadow 0.3s, transform 0.3s", // Added 'transform' property for the hover effect
        textAlign: "center",
        cursor: "pointer", // Change the cursor to a pointer on hover
        transform: "scale(1)", // Initial scale
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.005)"; // Scale up on hover
        e.currentTarget.style.boxShadow = "5px 5px 10px rgb(175,148,131)"; // Add a larger shadow on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)"; // Reset the scale on hover out
        e.currentTarget.style.boxShadow = "2px 2px 5px rgb(175,148,131)"; // Reset the shadow on hover out
      }}
       
      >
        <h2
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}
        >
          Features and Functionalities
        </h2>
        <div style={{ fontSize: "16px", lineHeight: "1.5", color: "#333" }}>
          <p>
            Product Listing and Management: Easily add, edit, and organize your
            product catalog. Include product descriptions, images, prices, and
            inventory levels. Organize products into categories for easy
            navigation. <br></br>Shopping Cart: Allow customers to add products
            to their shopping carts, review their selections, and proceed to
            checkout seamlessly. The cart retains items for future visits.{" "}
            <br></br>User Registration and Authentication: Enable customers to
            create accounts, save their preferences, and track their order
            history. Robust authentication mechanisms ensure security. Payment
            Processing: Offer multiple payment options, including credit cards,
            digital wallets, and more. Our platform supports secure payment
            gateways for hassle-free transactions. <br></br>Order Tracking:
            Customers can track their orders in real-time, receiving updates on
            shipping and delivery status. This feature instills confidence and
            transparency.<br></br>
            Reviews and Ratings: Encourage user-generated content by allowing
            customers to leave reviews and ratings for products. Build trust and
            credibility.<br></br> Search Functionality: Implement an intuitive
            search bar that helps customers find products quickly. Advanced
            search features, such as filters, enhance the browsing experience.
            <br></br> Inventory Management: Keep a close eye on product stock
            levels and receive alerts when items are running low. Prevent
            overselling and manage your inventory efficiently. <br></br>
            Reporting and Analytics: Gain insights into your business
            performance with detailed analytics. Track sales, customer behavior,
            and other vital metrics to make informed decisions. <br></br>
            Customer Support: Easily manage customer inquiries and issues
            through a dedicated support system. Streamline communication and
            enhance customer satisfaction.
            <br></br>
            These are just a few highlights of the features and functionalities
            you'll find within [Your E-commerce Website Name]. Each feature is
            designed to meet the diverse needs of your business, whether you're
            a small startup or a large enterprise. Explore our documentation to
            learn how to leverage these features to grow your online business.
          </p>
        </div>
      </div>
      <div
    style={{
        margin: "10px",
        boxShadow: "2px 2px 5px rgb(175,148,131)",
        padding: "10px",
        borderRadius: "5px",
        transition: "box-shadow 0.3s, transform 0.3s", // Added 'transform' property for the hover effect
        textAlign: "center",
        cursor: "pointer", // Change the cursor to a pointer on hover
        transform: "scale(1)", // Initial scale
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.005)"; // Scale up on hover
        e.currentTarget.style.boxShadow = "5px 5px 10px rgb(175,148,131)"; // Add a larger shadow on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)"; // Reset the scale on hover out
        e.currentTarget.style.boxShadow = "2px 2px 5px rgb(175,148,131)"; // Reset the shadow on hover out
      }}
      >
        <h2
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}
        >
          API Documentation
        </h2>
        <div style={{ fontSize: "16px", lineHeight: "1.5", color: "#333" }}>
          <p>
            For developers seeking to integrate with our e-commerce platform, we
            provide comprehensive API documentation. Our APIs open up
            opportunities for customization, integration with third-party
            services, and the development of unique solutions to suit your
            specific requirements.<br></br> API Endpoints: Explore a list of
            available API endpoints, each serving a distinct purpose, such as
            product management, order processing, or user authentication.
            <br></br> Request Methods: Understand the HTTP request methods (GET,
            POST, PUT, DELETE) used to interact with our APIs. We provide clear
            guidelines on how to structure API requests.<br></br>{" "}
            Authentication: Learn about the authentication mechanisms required
            to access our APIs securely. We offer various authentication
            methods, including API keys and OAuth.<br></br>
            Response Formats: Understand the structure of API responses,
            including status codes, data formats (JSON/XML), and error handling.
            <br></br>
            Rate Limits: Discover rate-limiting policies to ensure fair and
            efficient use of our APIs.<br></br> Use Cases and Examples: Access
            practical examples and use cases that demonstrate how to perform
            common tasks using our APIs.
          </p>
        </div>
      </div>
      <div
       style={{
        margin: "10px",
        boxShadow: "2px 2px 5px rgb(175,148,131)",
        padding: "10px",
        borderRadius: "5px",
        transition: "box-shadow 0.3s, transform 0.3s", // Added 'transform' property for the hover effect
        textAlign: "center",
        cursor: "pointer", // Change the cursor to a pointer on hover
        transform: "scale(1)", // Initial scale
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.005)"; // Scale up on hover
        e.currentTarget.style.boxShadow = "5px 5px 10px rgb(175,148,131)"; // Add a larger shadow on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)"; // Reset the scale on hover out
        e.currentTarget.style.boxShadow = "2px 2px 5px rgb(175,148,131)"; // Reset the shadow on hover out
      }}
    
      >
        <h2
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}
        >
          How-To Guides
        </h2>
        <div style={{ fontSize: "16px", lineHeight: "1.5", color: "#333" }}>
          <p>
            Our how-to guides provide step-by-step instructions for common tasks
            and workflows within Ansh store. These guides are designed to help
            users quickly and efficiently accomplish specific actions. Some
            examples of how-to guides include:<br></br>Ceating a Product
            Listing: Learn how to add a new product to your catalog, including
            details such as product name, description, images, and pricing.
            Understand how to categorize products for easy browsing.<br></br>{" "}
            Processing Orders: Follow a detailed guide on how to process
            customer orders, from order confirmation to shipping and tracking.
            Learn about order status updates and communication with customers.
            <br></br> Managing User Accounts: Discover how to manage user
            accounts, including user registration, password resets, and account
            suspension. Ensure the security and integrity of user profiles.
            <br></br> Setting Up Payment Gateways: Get step-by-step instructions
            on configuring payment gateways for your e-commerce website.
            Understand the process of connecting your site to payment providers.
            <br></br>
            Implementing Product Reviews: Learn how to enable and manage product
            reviews and ratings. Understand the benefits of user-generated
            content for your business. <br></br> Each how-to guide is
            accompanied by screenshots, examples, and best practices to ensure
            users can complete tasks with confidence. We are committed to
            simplifying complex processes, making your experience with Ansh
            store as smooth as possible.{" "}
          </p>
        </div>
      </div>
      <div
   style={{
    margin: "10px",
    boxShadow: "2px 2px 5px rgb(175,148,131)",
    padding: "10px",
    borderRadius: "5px",
    transition: "box-shadow 0.3s, transform 0.3s", // Added 'transform' property for the hover effect
    textAlign: "center",
    cursor: "pointer", // Change the cursor to a pointer on hover
    transform: "scale(1)", // Initial scale
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.005)"; // Scale up on hover
    e.currentTarget.style.boxShadow = "5px 5px 10px rgb(175,148,131)"; // Add a larger shadow on hover
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)"; // Reset the scale on hover out
    e.currentTarget.style.boxShadow = "2px 2px 5px rgb(175,148,131)"; // Reset the shadow on hover out
  }}
      >
        <h2
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}
        >
          Troubleshooting
        </h2>
        <div style={{ fontSize: "16px", lineHeight: "1.5", color: "#333" }}>
          <p>
            In the troubleshooting section, we address common issues and errors
            that users may encounter while using [Your E-commerce Website Name].
            We understand that problems can arise, and our goal is to provide
            solutions and guidance to resolve these issues promptly.
            <br></br>
            Error Code Reference: Access a comprehensive list of error codes and
            their explanations. This reference helps users identify the nature
            of errors they encounter. Troubleshooting FAQs: Find answers to
            frequently asked questions related to technical issues, account
            problems, or order discrepancies. Contacting Support: If users
            cannot find solutions to their problems, we provide clear
            instructions on how to contact our support team for assistance. We
            are committed to resolving issues efficiently and effectively.
            System Status Updates: Check the status of our platform in
            real-time. We provide updates on any ongoing maintenance or servic
            <br></br>
            We understand that a seamless user experience is paramount, and our
            troubleshooting resources are here to ensure that users can overcome
            obstacles and continue using our e-commerce platform effectively.
          </p>
        </div>
      </div>
      <div
  style={{
    margin: "10px",
    boxShadow: "2px 2px 5px rgb(175,148,131)",
    padding: "10px",
    borderRadius: "5px",
    transition: "box-shadow 0.3s, transform 0.3s", // Added 'transform' property for the hover effect
    textAlign: "center",
    cursor: "pointer", // Change the cursor to a pointer on hover
    transform: "scale(1)", // Initial scale
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.005)"; // Scale up on hover
    e.currentTarget.style.boxShadow = "5px 5px 10px rgb(175,148,131)"; // Add a larger shadow on hover
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)"; // Reset the scale on hover out
    e.currentTarget.style.boxShadow = "2px 2px 5px rgb(175,148,131)"; // Reset the shadow on hover out
  }}
   
      >
        <h2
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}
        >
          Security and Privacy
        </h2>
        <div style={{ fontSize: "16px", lineHeight: "1.5", color: "#333" }}>
          <p>
            Security and privacy are of utmost importance to us at [Your
            E-commerce Website Name]. In this section, we provide detailed
            information about the measures we have in place to protect user data
            and ensure compliance with relevant regulations.<br></br>
            Data Encryption: Learn how we use encryption to safeguard data
            during transmission and storage, protecting sensitive information
            such as payment details and personal data. Privacy Policy: Access
            our comprehensive privacy policy that outlines how we collect, use,
            and protect user information. We are committed to transparency and
            user data rights. Compliance: Understand how our platform complies
            with data protection regulations such as GDPR (General Data
            Protection Regulation) and CCPA (California Consumer Privacy Act).
            Security Best Practices: Find guidelines and recommendations for
            enhancing security on your end, such as password management and
            account security tips. Incident Response: Learn about our procedures
            for handling data breaches and security incidents, ensuring swift
            and effective responses.<br></br>
            Security and privacy are non-negotiable aspects of our service. We
            are dedicated to maintaining the trust of our users and providing a
            secure environment for their online transactions and interactions.
          </p>
        </div>
      </div>
      <div
   style={{
    margin: "10px",
    boxShadow: "2px 2px 5px rgb(175,148,131)",
    padding: "10px",
    borderRadius: "5px",
    transition: "box-shadow 0.3s, transform 0.3s", // Added 'transform' property for the hover effect
    textAlign: "center",
    cursor: "pointer", // Change the cursor to a pointer on hover
    transform: "scale(1)", // Initial scale
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.005)"; // Scale up on hover
    e.currentTarget.style.boxShadow = "5px 5px 10px rgb(175,148,131)"; // Add a larger shadow on hover
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)"; // Reset the scale on hover out
    e.currentTarget.style.boxShadow = "2px 2px 5px rgb(175,148,131)"; // Reset the shadow on hover out
  }}
      >
        <h2
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}
        >
          Support and Contact Information
        </h2>
        <div style={{ fontSize: "16px", lineHeight: "1.5", color: "#333" }}>
          <p>
            Security and privacy are of utmost importance to us at [Your
            E-commerce Website Name]. In this section, we provide detailed
            information about the measures we have in place to protect user data
            and ensure compliance with relevant regulations.<br></br>
            Data Encryption: Learn how we use encryption to safeguard data
            during transmission and storage, protecting sensitive information
            such as payment details and personal data. Privacy Policy: Access
            our comprehensive privacy policy that outlines how we collect, use,
            and protect user information. We are committed to transparency and
            user data rights. Compliance: Understand how our platform complies
            with data protection regulations such as GDPR (General Data
            Protection Regulation) and CCPA (California Consumer Privacy Act).
            Security Best Practices: Find guidelines and recommendations for
            enhancing security on your end, such as password management and
            account security tips. Incident Response: Learn about our procedures
            for handling data breaches and security incidents, ensuring swift
            and effective responses.<br></br>Security and privacy are
            non-negotiable aspects of our service. We are dedicated to
            maintaining the trust of our users and providing a secure
            environment for their online transactions and interactions.
          </p>
        </div>
      </div>
      <div
  style={{
    margin: "10px",
    boxShadow: "2px 2px 5px rgb(175,148,131)",
    padding: "10px",
    borderRadius: "5px",
    transition: "box-shadow 0.3s, transform 0.3s", // Added 'transform' property for the hover effect
    textAlign: "center",
    cursor: "pointer", // Change the cursor to a pointer on hover
    transform: "scale(1)", // Initial scale
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.005)"; // Scale up on hover
    e.currentTarget.style.boxShadow = "5px 5px 10px rgb(175,148,131)"; // Add a larger shadow on hover
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)"; // Reset the scale on hover out
    e.currentTarget.style.boxShadow = "2px 2px 5px rgb(175,148,131)"; // Reset the shadow on hover out
  }}
   
      >
        <h2
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}
        >
          Updates and Version History
        </h2>
        <div style={{ fontSize: "16px", lineHeight: "1.5", color: "#333" }}>
          <p>
            We continuously improve and enhance [Your E-commerce Website Name]
            to provide you with the best possible experience. In this section,
            you'll find information on recent updates, new features, and a
            version history of our platform.<br></br>
            Release Notes: Access release notes for each version of our
            platform. These notes detail the changes, improvements, and bug
            fixes introduced in each update. Upcoming Features: Get a sneak peek
            at upcoming features and improvements that are currently in
            development or planned for future releases. Feedback and
            Suggestions: We encourage you to provide feedback and suggestions
            for improving our platform. Your input helps us prioritize
            enhancements that matter most to our users.<br></br>Keeping your
            platform up to date ensures that you benefit from the latest
            features, security patches, and optimizations. We appreciate your
            support and collaboration in making [Your E-commerce Website Name]
            even better.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Doc;

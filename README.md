# Contractor Data Scraper
This project is a simple web scraper that extracts contractor details from a construction directory website and stores them in an Excel file. It also allows you to interact with the extracted data through a chatbot interface using Streamlit.

# Overview
This project crawls contractor data from the website https://muqawil.org/en/contractors, extracts key information about contractors, and stores it in an Excel file. The key pieces of information scraped include:

Contractor Name
Membership Number
Email
Mobile Number
City
Interests (not all the contractor have insert)
The data can then be queried through a chatbot interface, which uses a simple similarity search to provide relevant answers based on the contractor data.

# Installation
Clone the repository to your local machine:

``` git clone <repository-url> ```

Install the required Python libraries by running:

``` pip install -r Requirements.txt ```

Run the web app:

``` streamlit run straemlit.py ```

The app will open in your default browser, where you can interact with the scraper and chatbot interface.

# Code Explanation
the explanation is added on the jupter file

# Challenges and Solutions
Challenge: The contractor list spans multiple pages, so we need to handle pagination.
Solution: The scraper constructs URLs for each page and collects contractor details from each page sequentially.

Challenge: After scraping, how can we search through the contractor data?
Solution: We use a simple similarity search to match user queries to the contractor data and retrieve relevant information.

Challenge: I initially used large language models (LLMs) for the chatbot interaction, even though it wasn't strictly required for the functionality. I added LLMs to make the interaction feel more natural and dynamic.
Solution: I integrated an LLM model to handle user queries in a conversational manner, enhancing the experience even though it wasn't a necessary step for the core functionality.

Challenge: I initially considered using Qdrant for vector storage, but since I am using LangChain for the application, I opted for Chroma and FAISS as they are more compatible with LangChain's ecosystem.
Solution: I integrated Chroma and FAISS for the vector store, enabling efficient similarity search and interaction with the contractor data.

Challenge: During scraping, I encountered an issue where emails were shown as protected, preventing me from extracting them.
Solution: Unfortunately, due to time constraints, I could not find a way to bypass the email protection mechanism. The email field may remain empty or inaccessible.

Challenge: Web scraping can sometimes result in errors due to network issues or unexpected changes in the website structure.
Solution: I added error handling to the crawl_contractors function to ensure that if any page fails to load or an error occurs, the process continues without crashing.

# Results
Once the scraper runs, it will generate an Excel file contractors_data.xlsx containing the extracted contractor data. You can use this data for further analysis or querying.


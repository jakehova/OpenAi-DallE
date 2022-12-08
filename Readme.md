# Dall-E / OpenAI playground

Just an intro attempt at using open ai's dall-e in an express app.  

## Dependencies
* Need an API Key from Open AI 

## Running the code
* create a '.env' file that has the same variables as .env.example
* update the OPENAI_API_KEY in .env file with your Open AI API Key
* install npm (nodejs.org)
* go to a terminal and navigate to this directory
* run: npm install
* run: npm run start 
    * if you want to develop and monitor live changes, run: npm run dev


## Notes
* If you click submit and nothing happens, open the developer tools of your browser and look in the console to help diagnose.
    * if you see a 400 error, make sure your Open AI account billing has been updated

## Sources
* [OpenAI Node Repo](https://github.com/openai/openai-node)

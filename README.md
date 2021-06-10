# Portfolio
## Built using React and tools from GitHub Student Developer Pack.

![Header Image](./mainimage.png)

This is a tutorial on building a portfolio website using React and tools from the GitHub Student Developer Pack. Tools used from the **GitHub Student Developer Pack**, **Namecheap** and **GitHub**.  

The hosted version of this repository is live at [https://ronaldromero.me](https://ronaldromero.me)


## Steps to run locally
1. Clone the repository using `git clone https://github.com/ronald1512/portafolio.git`
2. `cd` into the cloned repository and run `yarn`. This will install all the dependencies required for the project.
3. Run the server using `yarn start`.
4. Create your own portfolio by editing the `profileData.json` present in the `src` directory.
5. Place your image in `Assets` directory present inside `src` directory. Make sure to rename it to `profile.jpg` or else you can edit the filename in `import` statement of `Sidebar.js` Component.

## Blog Post
The detailed blog post for the tutorial is at [medium link here](https://levelup.gitconnected.com/create-a-portfolio-using-react-and-github-student-developer-pack-955379207855)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
The Bootstrap template used in this tutorial is [https://github.com/BlackrockDigital/startbootstrap-resume](https://github.com/BlackrockDigital/startbootstrap-resume)



## Github Pages + React app + Namecheap domain

If you want to deploy a react app using Github pages and a custom Namecheap domain, you have to do the following:

1. Follow [this](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages) instructions.
2. Make sure to write "homepage":"http://yourusername.github.io/" on package.json
3. Add CNAME file into the **PUBLIC** folder of react. 

## Steps to deploy app in gh-pages
 * npm install gh-pages
 * git remote add origin repo_url
 * add homepage url   -> http://username.github.io/repo_name
 * add:
 *      "predeploy":"npm run build",
        "deploy": "gh-pages -d build"

  * `npm run deploy`


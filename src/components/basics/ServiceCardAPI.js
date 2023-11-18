const Api=[{
  id:1,
  serviceName:"EC2",
  image:"images/img1.jpg",
  image2:"https://miro.medium.com/v2/resize:fit:740/1*q6rLVYKhvKWyfQWTq7z8_g.png",
  category:"Compute",
  description:"Amazon EC2 is a web service that provides resizable compute capacity in the cloud. It is designed to make web-scale computing easier for developers.",

  more_description:"Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud.  ✔ Access reliable, scalable infrastructure on demand. Scale capacity within minutes with SLA commitment of 99.99% availability.✔ Provide secure compute for your applications. Security is built into the foundation of Amazon EC2 with the AWS Nitro System.✔ Optimize performance and cost with flexible options like AWS Graviton-based instances, Amazon EC2 Spot instances, and AWS Savings Plans.Use Cases : Run Cloud-Native and Enterprise Applications Deliver secure, reliable, high-performance, and cost-effective compute infrastructure to meet demanding business needs",


  more_description_link:"https://aws.amazon.com/pm/ec2/?trk=32f4fbd0-ffda-4695-a60c-8857fab7d0dd&sc_channel=ps&ef_id=CjwKCAjwseSoBhBXEiwA9iZtxjcaGbawblSZLk0q17UG4oNG97NZmWiyC1YiomEKaHS2JSYznPOh-BoCJ8cQAvD_BwE:G:s&s_kwcid=AL!4422!3!476942909971!e!!g!!ec2!11539707735!118057053088"
},{
id:2,
serviceName:"Amazon EBS",
image:"images/img4.jpg",
category:"Storage",
description:"Amazon EBS allows you to create storage volumes and attach them to Amazon EC2 instances,you can create a file system on top of these volumes or run a database.",

more_description:"Amazon Elastic Block Store (Amazon EBS) provides block level storage volumes for use with EC2 instances. EBS volumes behave like raw, unformatted block devices. You can mount these volumes as devices on your instances. EBS volumes that are attached to an instance are exposed as storage volumes that persist independently from the life of the instance. You can create a file system on top of these volumes, or use them in any way you would use a block device (such as a hard drive). You can dynamically change the configuration of a volume attached to an instance.",


more_description_link:"https://aws.amazon.com/ebs/"
},
{
  id: 3,
  serviceName: "Amazon RDS",
  image: "images/img3.jpg",
  category: "Database",
  description: "Amazon Relational Database Service (Amazon RDS) is a service used to manage database engines and instances, including Amazon Aurora databases.",
  more_description: "Amazon RDS is a managed relational database service that makes it easier to set up, operate, and scale a relational database in the cloud. ",
  more_description_link: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html"
}

,
{
id:4,
  

  serviceName:"Amazon Cloudfront",
  image:"images/img2.jpg",
  category:"Network and Content Delivery",
  description:"Amazon CloudFront is a web service that speeds up distributio static and dynamic web content,to your users. CloudFront delivers your content through edge locations.",

  more_description:"Amazon CloudFront is a content delivery network (CDN) operated by Amazon Web Services. The content delivery network was created to provide a globally-distributed network of proxy servers to cache content, such as web videos or other bulky media, more locally to consumers, to improve access speed for downloading the content.CloudFront has servers located in the United Kingdom, Ireland, The Netherlands, Germany, Spain, Hong Kong, Singapore, Japan, Taiwan, Vietnam, Indonesia, India, Australia, South America, Africa, and several major cities in the United States. In November 2022, the service operated from 400 edge locations on six continents",


  more_description_link:"https://aws.amazon.com/cloudfront/"
  
},
{
  id:5,
    serviceName:"Amazon GuardDuty",
    image:"images/img5.jpg",
    category:"Security",
    description:"a threat detection service that continuously monitors your AWS accounts and workloads for malicious activity and delivers detailed security findings for visibility and remediation.",

    more_description:"Amazon GuardDuty analyzes and processes data from foundational data sources to detect anomalies involving AWS Identity and Access Management (IAM) access keys and Amazon Elastic Compute Cloud (Amazon EC2). You can also activate GuardDuty protection plans to analyze additional data from other AWS services in your AWS environment to protect workloads using Amazon S3, Amazon EKS, Amazon RDS, and AWS Lambda.GuardDuty Malware Protection Scan workloads for malware when GuardDuty detects that one of your Amazon EC2 instances or container workloads running on Amazon EC2 is doing something suspicious    ",


    more_description_link:"https://aws.amazon.com/guardduty/"
  },
  {
    id:6,
      serviceName:"Amazon Cloudwatch",
      image:"images/img6.jpg",
      category:"Management",
      description:"Amazon EBS allows you to create storage volumes and attach them to Amazon EC2 instances. Once attached, you can create a file system on top of these volumes, run a database.",

      more_description:"Amazon CloudWatch monitors your Amazon Web Services (AWS) resources and the applications you run on AWS in real time. You can use CloudWatch to collect and track metrics, which are variables you can measure for your resources and applications.      The CloudWatch home page automatically displays metrics about every AWS service you use. You can additionally create custom dashboards to display metrics about your custom applications, and display custom collections of metrics that you choose.You can create alarms that watch metrics and send notifications or automatically make changes to the resources you are monitoring when a threshold is breached. For example, you can monitor the CPU usage and disk reads and writes of your Amazon EC2 instances and then use that data to determine whether you should launch additional instances to handle increased load. You can also use this data to stop under-used instances to save money.      With CloudWatch, you gain system-wide visibility into resource utilization, application performance, and operational health.",


      more_description_link:"https://aws.amazon.com/cloudwatch/"
    }
]

export default Api;
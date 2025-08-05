import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

function ProjectsCard({ title, description, image, githubLink, websiteLink }) {
  return (
    <Card className="max-w-[16rem] max-h-[32rem] overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img src={image} alt={title} />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h6"
          color="blue-gray"
          className="font-bold text-xl"
        >
          {title}
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="mt-3 text-sm font-normal"
        >
          {description}
        </Typography>
        <div className="flex items-center mt-4 space-x-4">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <i
              className="bi bi-github text-lg hover:text-[#d76f78] duration-300"
            ></i>
          </a>
          <a href={websiteLink} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-globe2 text-lg hover:text-[#d76f78] duration-300"></i>
          </a>
        </div>
      </CardBody>
    </Card>
  );
}

export default ProjectsCard;

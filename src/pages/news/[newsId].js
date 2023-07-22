import RootLayout from "@/components/Layouts/RootLayout";
import { Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { CommentOutlined, ProfileOutlined, CalendarOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useGetNewsByIdQuery } from "@/redux/api/api";

const NewsDetails = () => {
  const router = useRouter();
  const { newsId } = router.query;

  const { data: news, isLoading } = useGetNewsByIdQuery(newsId, { refetchOnMountOrArgChange: true });
  return (
    <div style={{ marginTop: "50px" }}>
      {isLoading ? (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      ) : (
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <Col span={12}>
            <Image src={news?.image_url} alt='' width={500} height={300} layout='responsive' />
          </Col>
          <Col span={12}>
            <h1>{news.title}</h1>

            <div
              className='line'
              style={{
                height: "5px",
                width: "100%",
                backgroundColor: "#000000",
                margin: "20px 0px",
              }}
            ></div>
            <p style={{ fontSize: "20px" }}>{news.description}</p>
            <p
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                color: "gray",
                margin: "10px 0px",
                fontSize: "10px",
              }}
            >
              <span>
                <CalendarOutlined /> {news.release_date}
              </span>
              <span>
                <CommentOutlined /> {news.comment_count}
              </span>
              <span>
                <ProfileOutlined /> {news.author}
              </span>
            </p>
          </Col>
        </Row>
      )}
    </div>
  );
};

NewsDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default NewsDetails;

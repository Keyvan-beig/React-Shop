import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const data = [
    {
        src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
        title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
        channel: 'Don Diablo',
        views: '396k views',
        createdAt: 'a week ago',
    },
    {
        src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
        title: 'Queen - Greatest Hits',
        channel: 'Queen Official',
        views: '40M views',
        createdAt: '3 years ago',
    },
    {
        src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
        channel: 'Calvin Harris',
        views: '130M views',
        createdAt: '10 months ago',
    },
];

interface MediaProps {
    loading?: boolean;
}

function Media(props: MediaProps) {
    const { loading = false } = props;

    return (
        <Grid className="m-auto w-[90%] bg-gray-50 p-5">
            <Grid className='w-[100%] h-[50px] bg-gray-200 my-5'></Grid>
            <Grid style={{aspectRatio:"10/3"}} className='w-[100%] bg-gray-200'></Grid>
            <Grid container sx={{ flexWrap: 'nowrap', display: 'grid' }} className={"md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-4"}>
                {(loading ? Array.from(new Array(5)) : data).map((item, index) => (
                    <Box key={index}>
                        {item ? (
                            <img

                                alt={item.title}
                                src={item.src}
                            />
                        ) : (
                            <Skeleton variant="rectangular" width={"100%"} height={"300px"} style={{aspectRatio: "12 / 10"}}/>
                        )}
                        {item ? (
                            <Box sx={{ pr: 2 }}>
                                <Typography gutterBottom variant="body2">
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{ display: 'block', color: 'text.secondary' }}
                                >
                                    {item.channel}
                                </Typography>
                                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                    {`${item.views} • ${item.createdAt}`}
                                </Typography>
                            </Box>
                        ) : (
                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton />
                                <Skeleton width="60%" />
                            </Box>
                        )}
                    </Box>
                ))}
            </Grid>
        </Grid>
    );
}

export default function SkeletonLoad() {
    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Media loading />
        </Box>
    );
}
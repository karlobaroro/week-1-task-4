import React, { Component } from 'react';
import { Card, Grid, CardContent, Typography, CardMedia } from '@mui/material/';

class Contact extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={2} sx={{margin:"0px"}}>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345,backgroundColor: "#B6EADA" }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv1DWuotdxKKfcsgHH_r44icmTCH8RH7dLJQ&usqp=CAU"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Location
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    South Korea, Gangdong-gu
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345,backgroundColor: "#B6EADA" }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://images.squarespace-cdn.com/content/v1/5cc5e9a9e8ba44a89b6ef7db/b518d575-d15d-4cc1-b57f-2797462beb83/Contact_banners_refresh.png"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Contact Number
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    (123) 234-2322
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345,backgroundColor: "#B6EADA" }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://www.nicepng.com/png/detail/140-1404693_jyp-entertainment-logo-jyp-ent-logo.png"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Email
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    fan@jype.com
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Contact;
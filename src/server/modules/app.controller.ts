import { Controller, Get, Request } from '@nestjs/common';
import { renderModule } from '@angular/platform-server';
import { ServerAppModule } from '../../client/server-app.module';

const document =
`<html>
    <head>
        <meta charset="UTF-8">
        <title>Hello World</title>
    </head>
    <body>
        <home></home>
    </body>
</html>`;

@Controller('/')
export class AppController {

    @Get()
    public async serverRender(@Request() req: any ) {
        return await renderModule(ServerAppModule, {
            document,
            url: req.url,
        });
    }
}
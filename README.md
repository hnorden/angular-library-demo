# Showcase: Angular library customization

Naturally a library is to be used by multiple applications in different scenarios. Therefore you should prevent leaking business logic into your library and keep it abstract and extendable.

Here I demonstrate a possibility by implementing an abstract service defined and used within the library. The solution is pretty simple using Angular's dependency injection mechanism.

## Library: Implementation details

The library defines the `abstract class MyAbstractLibService`. We inject this abstract service into a component of the library using an Injection-Token (here of type `InjectionToken<string>`):

```
constructor(@Inject(MY_IMPLEMENTATION) private myAbstractLibService: MyAbstractLibService) { }
```

## App: Implementation details

First we implement the abstract service within the main application:

```
class MyLibService extends MyAbstractLibService {
    ...
}
```

Then we tell angular to manage this implementation using the defined Injection-Token:

```
providers: [
    { provide: MY_IMPLEMENTATION, useClass: MyLibService }
]
```

# Run instructions

## Angular Workspace

To build and run `my-app` and `my-lib` with workspace configuration:

```
git checkout master
npm run start
```

Open [http://localhost:4200/](http://localhost:4200/).

## Split builds

To build and run `my-app` and `my-lib` independently I have prepared a docker-compose setup:

```
git checkout split_builds
docker-compose up
```

Open [http://localhost:4200/](http://localhost:4200/).
